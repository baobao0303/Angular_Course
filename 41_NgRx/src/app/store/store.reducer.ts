import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

const initialState = 0;

// Cach 1
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state) => state - 1)
);

// An Alternative Way Of Creating Reducers
// Cach 2
// export function counterReducer(
//   state = initialState,
//   action: CounterAction | Action
// ) {
//   if (action.type === '[Counter] increment') {
//     return state + (action as IncrementAction).value;
//   } else if (action.type === '[Counter] decrement') {
//     return state - 1;
//   }
//   return state;
// }
