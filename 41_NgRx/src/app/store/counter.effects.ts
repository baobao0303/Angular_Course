import {
  Actions,
  createEffect,
  ofType,
  // Effect
} from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffect {
  constructor(private actions$: Actions) {}

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
        tap((action: { type: string; value: number }) => [
          console.log(action),
          localStorage.setItem('counter', action.value.toString()),
        ])
      ),
    {
      dispatch: false, // To not dispatch the actions to the reducer
      //   resubscribeOnError: false, // To prevent the effect from subscribing again in case of error
    }
  );
}
