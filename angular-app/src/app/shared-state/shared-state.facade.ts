import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, firstValueFrom } from 'rxjs';
import type { SharedFormState, SharedState } from '../../../../shared/state';
import {
  selectSharedState,
  selectSelectedSection,
  selectSharedForm
} from './store/shared-state.reducer';
import * as SharedStateActions from './store/shared-state.actions';
import { getOrCreateSharedStore } from '../../../../shared/store';

@Injectable({ providedIn: 'root' })
export class SharedStateFacade {
  readonly state$: Observable<SharedState> = this.store.select(selectSharedState);
  readonly selectedSection$: Observable<string> = this.store.select(
    selectSelectedSection
  );
  readonly form$: Observable<SharedFormState> = this.store.select(
    selectSharedForm
  );

  constructor(private readonly store: Store<{ sharedState: SharedState }>) {}

  /**
   * Imperative snapshot for ease of interop with template two-way bindings.
   * Uses the shared store to avoid introducing async gaps.
   */
  get snapshot(): SharedState {
    return getOrCreateSharedStore().getState();
  }

  setSelectedSection(sectionId: string) {
    this.store.dispatch(SharedStateActions.selectSection({ sectionId }));
  }

  updateForm(changes: Partial<SharedFormState>) {
    this.store.dispatch(SharedStateActions.updateForm({ changes }));
  }

  /**
   * Helper for consumers that prefer a one-off synchronous read from ngrx store.
   */
  async readOnce(): Promise<SharedState> {
    return firstValueFrom(this.state$);
  }
}
