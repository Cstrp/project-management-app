import { createAction, props } from '@ngrx/store';
import { IBoard } from 'src/app/modules';

export const ADD_BOARD_ACTION = '[boards page] add board';
export const UPDATE_BOARD_ACTION = '[boards page] update board';
export const DELETE_BOARD_ACTION = '[boards page] delete board';
export const LOAD_BOARDS = '[boards page] load boards';
export const LOAD_BOARDS_SUCCESS = '[boards page] load boards success';

export const addBoard = createAction(ADD_BOARD_ACTION, props<{ board: IBoard }>());
export const updateBoard = createAction(UPDATE_BOARD_ACTION, props<{ board: IBoard }>());
export const deleteBoard = createAction(DELETE_BOARD_ACTION, props<{ id: string }>());
export const loadBoards = createAction(LOAD_BOARDS);
export const loadBoardsSuccess = createAction(LOAD_BOARDS_SUCCESS, props<{ boards: Array<IBoard> }>());
