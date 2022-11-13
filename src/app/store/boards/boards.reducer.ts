import { Action, createReducer, on } from '@ngrx/store';
import { IBoard } from 'src/app/modules';
import {
  addBoardSuccess,
  deleteBoardSuccess,
  loadBoardsSuccess,
  updateBoardSuccess,
} from './boards.actions';
import { boardsInitialState } from './boards.state';
import { IBoardsState } from './models';

const reducer = createReducer(
  boardsInitialState,
  on(addBoardSuccess, (state, action) => {
    let board = { ...action.board };

    return {
      ...state,
      boards: [...state.boards, board],
    };
  }),
  on(updateBoardSuccess, (state, action) => {
    const updatedBoards: IBoard[] = state.boards.map((board: IBoard) => {
      return action.board.id === board.id ? action.board : board;
    });

    return {
      ...state,
      boards: updatedBoards,
    };
  }),
  on(deleteBoardSuccess, (state, action) => {
    const updatedBoards: IBoard[] = state.boards.filter((board) => {
      return board.id !== action.id;
    });

    return {
      ...state,
      boards: updatedBoards,
    };
  }),
  on(loadBoardsSuccess, (state, action) => {
    return {
      ...state,
      boards: action.boards,
    };
  }),
);

export function boardsReducer(state: IBoardsState | undefined, action: Action) {
  return reducer(state, action);
}
