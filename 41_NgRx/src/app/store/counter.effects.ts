import { createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';

import { Actions } from '@ngrx/effects';

export class CounterEffect {
  constructor(private actions$: Actions) {}
  saveCount = createEffect(() =>
    this.actions$.pipe(
      ofType(increment, decrement),
      tap((action: { type: string; value: number }) => [
        console.log(action),
        localStorage.setItem('counter', action.value.toString()),
      ])
    )
  );
}
