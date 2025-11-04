import {
  SharedState,
  SharedStore,
  STORE_CHANGE_EVENT,
  STORE_GLOBAL_KEY,
  STORE_READY_EVENT,
  SharedStoreWindow
} from './state';

const STORAGE_KEY = 'reactBridgeSharedState';

type Listener = (state: SharedState) => void;

function cloneState(state: SharedState): SharedState {
  return {
    selectedSection: state.selectedSection,
    form: { ...state.form }
  };
}

function createDefaultState(): SharedState {
  return {
    selectedSection: 'overview',
    form: {
      title: 'Untitled note',
      description: 'Start typing your notes in the React form.',
      lastUpdated: new Date().toISOString()
    }
  };
}

function readPersistedState(): SharedState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage?.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return sanitizeState(parsed as Partial<SharedState>);
  } catch {
    return null;
  }
}

function sanitizeState(candidate: Partial<SharedState>): SharedState {
  const defaults = createDefaultState();
  const form = {
    ...defaults.form,
    ...(candidate.form ?? {})
  };
  return {
    selectedSection: candidate.selectedSection ?? defaults.selectedSection,
    form: {
      ...form,
      lastUpdated: form.lastUpdated ?? new Date().toISOString()
    }
  };
}

function persistState(state: SharedState) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // best-effort persistence; ignore write failures (e.g., quota exceeded)
  }
}

function createStore(initial?: SharedState): SharedStore {
  const bootstrapped = initial ?? readPersistedState();
  let state = bootstrapped ? cloneState(bootstrapped) : createDefaultState();
  const listeners = new Set<Listener>();

  persistState(state);

  function notify() {
    const snapshot = cloneState(state);
    listeners.forEach((listener) => listener(snapshot));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent(STORE_CHANGE_EVENT, {
          detail: snapshot
        })
      );
    }
    persistState(snapshot);
  }

  return {
    getState() {
      return cloneState(state);
    },
    setState(update) {
      const hasFormUpdate = update.form !== undefined;
      const incomingForm = hasFormUpdate ? { ...update.form } : undefined;
      const nextForm = hasFormUpdate
        ? {
            ...state.form,
            ...incomingForm,
            lastUpdated:
              incomingForm?.lastUpdated ?? new Date().toISOString()
          }
        : state.form;

      state = {
        ...state,
        ...update,
        form: hasFormUpdate ? nextForm : state.form
      };

      notify();
      return cloneState(state);
    },
    updateForm(update) {
      const nextForm = {
        ...state.form,
        ...update,
        lastUpdated: update.lastUpdated ?? new Date().toISOString()
      };
      state = { ...state, form: nextForm };
      notify();
      return cloneState(state);
    },
    subscribe(listener) {
      listeners.add(listener);
      listener(cloneState(state));
      return () => listeners.delete(listener);
    }
  } satisfies SharedStore;
}

function setupStorageListener(updateState: (next: SharedState) => void) {
  if (typeof window === 'undefined') return;
  const handler = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    try {
      if (event.newValue == null) return;
      const parsed = JSON.parse(event.newValue);
      const next = sanitizeState(parsed);
      updateState(next);
    } catch {
      /* ignore malformed payloads */
    }
  };
  window.addEventListener('storage', handler);
}

function isSharedStore(candidate: unknown): candidate is SharedStore {
  if (!candidate || typeof candidate !== 'object') return false;
  const maybe = candidate as SharedStore;
  return (
    typeof maybe.getState === 'function' &&
    typeof maybe.setState === 'function' &&
    typeof maybe.updateForm === 'function' &&
    typeof maybe.subscribe === 'function'
  );
}

export function getOrCreateSharedStore(target: SharedStoreWindow = window as SharedStoreWindow): SharedStore {
  if (target[STORE_GLOBAL_KEY] && isSharedStore(target[STORE_GLOBAL_KEY])) {
    return target[STORE_GLOBAL_KEY];
  }

  const store = createStore();
  setupStorageListener((nextState) => {
    // Replace internal state by leveraging the public setState API to reuse notifications.
    store.setState(nextState);
  });
  Object.defineProperty(target, STORE_GLOBAL_KEY, {
    value: store,
    enumerable: false,
    configurable: false,
    writable: false
  });

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(STORE_READY_EVENT, {
        detail: store
      })
    );
  }

  return store;
}

export function getSharedStore(target: SharedStoreWindow = window as SharedStoreWindow): SharedStore {
  const store = target[STORE_GLOBAL_KEY];
  if (!store || !isSharedStore(store)) {
    throw new Error('Shared store has not been initialised yet.');
  }
  return store;
}
