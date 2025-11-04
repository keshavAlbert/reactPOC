import { Injectable, NgZone } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { defer, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getOrCreateSharedStore } from '../../../../../shared/store';
import type { SharedState } from '../../../../../shared/state';
import * as SharedStateActions from './shared-state.actions';

@Injectable()
export class SharedStateEffects {
  private readonly sharedStore = getOrCreateSharedStore();

  syncFromExternal$ = createEffect(() =>
    defer(() =>
      new Observable<Action>((subscriber) => {
        subscriber.next(
          SharedStateActions.syncFromExternal({
            state: this.sharedStore.getState()
          })
        );

        const unsubscribe = this.sharedStore.subscribe((state: SharedState) => {
          this.zone.run(() =>
            subscriber.next(SharedStateActions.syncFromExternal({ state }))
          );
        });

        return () => unsubscribe();
      })
    )
  );

  forwardSection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedStateActions.selectSection),
        tap(({ sectionId }) =>
          this.sharedStore.setState({ selectedSection: sectionId })
        )
      ),
    { dispatch: false }
  );

  forwardForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SharedStateActions.updateForm),
        tap(({ changes }) => this.sharedStore.updateForm(changes))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly zone: NgZone
  ) {}
}
