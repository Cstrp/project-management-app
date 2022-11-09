import { createAction, props } from '@ngrx/store';
import { IBoard } from 'src/app/modules';

export const ADD_BOARD_ACTION = '[boards] add board';
export const UPDATE_BOARD_ACTION = '[boards] update board';
export const DELETE_BOARD_ACTION = '[boards] delete board';

export const addBoard = createAction(ADD_BOARD_ACTION, props<{ board: IBoard }>());

export const updateBoard = createAction(UPDATE_BOARD_ACTION, props<{ board: IBoard }>());

export const deleteBoard = createAction(DELETE_BOARD_ACTION, props<{ id: string }>());
