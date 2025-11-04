export type SharedFormState = {
  title: string;
  description: string;
  lastUpdated: string;
};

export type SharedState = {
  selectedSection: string;
  form: SharedFormState;
};

export interface SharedStore {
  getState(): SharedState;
  /**
   * Merges the provided state fragment into the current snapshot.
   * Returns the new snapshot to make chaining easier.
   */
  setState(update: Partial<SharedState>): SharedState;
  /**
   * Convenience helper to update just the form portion of the store.
   */
  updateForm(update: Partial<SharedFormState>): SharedState;
  /**
   * Subscribes to store changes. The listener is invoked immediately with the
   * latest snapshot and on every subsequent update. Returns an unsubscribe function.
   */
  subscribe(listener: (state: SharedState) => void): () => void;
}

export const STORE_GLOBAL_KEY = '__reactBridgeSharedStore__';
export const STORE_READY_EVENT = 'react-bridge:store-ready';
export const STORE_CHANGE_EVENT = 'react-bridge:state-changed';

export type SharedStoreWindow = Window & {
  [STORE_GLOBAL_KEY]?: SharedStore;
};
