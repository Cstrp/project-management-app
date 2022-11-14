import { createAction, props } from '@ngrx/store';
import { IColumn } from 'src/app/modules';

export const LOAD_COLUMNS = '[board page] load columns';
export const LOAD_COLUMNS_SUCCESS = '[board page] load columns success';
export const loadColumns = createAction(LOAD_COLUMNS, props<{ id: string }>());
export const loadColumnsSuccess = createAction(LOAD_COLUMNS_SUCCESS, props<{ columns: Array<IColumn> }>());

export const ADD_COLUMN_ACTION = '[board page] add column';
export const ADD_COLUMN_SUCCESS = '[board page] add column success';
export const addColumn = createAction(ADD_COLUMN_ACTION, props<{ id: string; column: IColumn }>());
export const addColumnSuccess = createAction(ADD_COLUMN_SUCCESS, props<{ column: IColumn }>());
