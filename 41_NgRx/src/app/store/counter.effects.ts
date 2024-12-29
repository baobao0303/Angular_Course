import {
  Actions,
  createEffect,
  ofType,
  // Effect
} from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { Observable, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffect {
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}

  //   Cach 1: version older than
  //   @Effect({ dispatch: false })
  //   saveCount = this.actions$.pipe(
  //     ofType(increment, decrement),
  //     tap((action: { type: string; value: number }) => [
  //       console.log(action),
  //       localStorage.setItem('counter', action.value.toString()),
  //     ])
  //   );
  // Cach 2: version newer than
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, count]) => {
          console.log(action);
          localStorage.setItem('counter', count.toString());
        })
      ),
    {
      dispatch: false, // To not dispatch the actions to the reducer
      //   resubscribeOnError: false, // To prevent the effect from subscribing again in case of error
    }
  );
}
