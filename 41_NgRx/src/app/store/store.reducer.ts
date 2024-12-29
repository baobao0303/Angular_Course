import { createReducer } from '@ngrx/store';

const initialState = 0;

// Cach 1
// export const counterReducer = createReducer(initialState);

// An Alternative Way Of Creating Reducers
// Cach 2
export function counterReducer(state = initialState) {
  return state;
}
