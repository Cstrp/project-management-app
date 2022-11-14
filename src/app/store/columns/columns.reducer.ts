import { Action, createReducer, on } from '@ngrx/store';
import { IColumn } from 'src/app/modules';
import { loadColumnsSuccess, addColumnSuccess, updateColumnSuccess, deleteColumnSuccess } from './columns.actions';
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
  on(updateColumnSuccess, (state, action) => {
    const updatedColumns: IColumn[] = state.columns.map((column: IColumn) => {
      return action.column.id === column.id ? action.column : column;
    });

    return {
      ...state,
      columns: updatedColumns,
    };
  }),
  on(deleteColumnSuccess, (state, action) => {
    const updatedColumns: IColumn[] = state.columns.filter((column) => {
      return column.id !== action.id;
    });

    return {
      ...state,
      columns: updatedColumns,
    };
  }),
);

export function columnsReducer(state: IColumnsState | undefined, action: Action) {
  return reducer(state, action);
}
