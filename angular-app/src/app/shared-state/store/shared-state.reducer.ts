import { createFeature, createReducer, on, createSelector } from '@ngrx/store';
import { getOrCreateSharedStore } from '../../../../../shared/store';
import type { SharedState } from '../../../../../shared/state';
import * as SharedStateActions from './shared-state.actions';

const sharedStore = getOrCreateSharedStore();

const initialState: SharedState = sharedStore.getState();

const reducer = createReducer<SharedState>(
  initialState,
  on(SharedStateActions.syncFromExternal, (_state, { state }) => ({ ...state })),
  on(SharedStateActions.selectSection, (state, { sectionId }) => ({
    ...state,
    selectedSection: sectionId
  })),
  on(SharedStateActions.updateForm, (state, { changes }) => ({
    ...state,
    form: {
      ...state.form,
      ...changes
    }
  }))
);

export const sharedStateFeature = createFeature({
  name: 'sharedState',
  reducer
});

export const {
  name: sharedStateFeatureKey,
  reducer: sharedStateReducer,
  selectSharedStateState
} = sharedStateFeature;

export const selectSharedState = selectSharedStateState;

export const selectSelectedSection = createSelector(
  selectSharedState,
  (state: SharedState) => state.selectedSection
);

export const selectSharedForm = createSelector(
  selectSharedState,
  (state: SharedState) => state.form
);
