import { Action, createReducer, on } from '@ngrx/store';
import {
  loadColumnsSuccess,
  addColumnSuccess
} from './columns.actions';
import { columnsInitialState } from './columns.state';
import { IColumnsState } from './models';

const reducer = createReducer(
  columnsInitialState,
  on(addColumnSuccess, (state, action) => {
    let column = { ...action.column };

    return {
      ...state,
      columns: [...state.columns, column],
    };
  }),
  on(loadColumnsSuccess, (state, action) => {
    return {
      ...state,
      columns: action.columns,
    };
  }),
);

export function columnsReducer(state: IColumnsState | undefined, action: Action) {
  return reducer(state, action);
}
