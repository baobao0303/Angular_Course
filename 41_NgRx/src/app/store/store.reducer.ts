import { decrement, increment } from './counter.actions';
import { createReducer, on } from '@ngrx/store';

const initialState = 0;

// Cach 1
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

// An Alternative Way Of Creating Reducers
// Cach 2
// export function counterReducer(state = initialState) {
//   return state;
// }
