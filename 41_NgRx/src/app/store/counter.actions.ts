import { Action, createAction, props } from '@ngrx/store';
export const init = createAction('[Counter] init');
export const set = createAction(
  '[Counter] set',
  props<{
    value: number;
  }>()
);
//Cach 1
export const increment = createAction(
  '[Counter] increment',
  props<{
    value: number;
  }>()
);
export const decrement = createAction(
  '[Counter] decrement',
  props<{
    value: number;
  }>()
);

//Cach 2
// export const INCREMENT = '[Counter] increment';
// export const DECREMENT = '[Counter] decrement';

// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }
// export class DecrementAction implements Action {
//   readonly type = DECREMENT;

//   constructor(public value: number) {}
// }

// export type CounterAction = IncrementAction | DecrementAction;
