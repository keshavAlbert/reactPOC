import { createAction, props } from '@ngrx/store';
import type { SharedFormState, SharedState } from '../../../../../shared/state';

export const selectSection = createAction(
  '[SharedState] Select Section',
  props<{ sectionId: string }>()
);

export const updateForm = createAction(
  '[SharedState] Update Form',
  props<{ changes: Partial<SharedFormState> }>()
);

export const syncFromExternal = createAction(
  '[SharedState] Sync From External',
  props<{ state: SharedState }>()
);
