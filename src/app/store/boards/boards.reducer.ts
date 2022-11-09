import { Action, createReducer, on } from '@ngrx/store';
import { IBoard } from 'src/app/modules';
import { addBoard, deleteBoard, updateBoard } from './boards.actions';
import { boardsInitialState } from './boards.state';
import { IBoardsState } from './models';

const reducer = createReducer(
  boardsInitialState,
  on(addBoard, (state, action) => {
    let board = { ...action.board };
    board.id = (state.boards.length + 1).toString();

    return {
      ...state,
      boards: [...state.boards, board],
    };
  }),
  on(updateBoard, (state, action) => {
    const updatedBoards: IBoard[] = state.boards.map((board: IBoard) => {
      return action.board.id === board.id ? action.board : board;
    });
    return {
      ...state,
      boards: updatedBoards,
    };
  }),
  on(deleteBoard, (state, action) => {
    const updatedBoards: IBoard[] = state.boards.filter((board) => {
      return board.id !== action.id;
    });
    return {
      ...state,
      boards: updatedBoards,
    };
  }),
);

export function boardsReducer(state: IBoardsState | undefined, action: Action) {
  return reducer(state, action);
}
