import { boardsReducer } from './boards/boards.reducer';
import { IBoardsState } from './boards/models';

export interface IAppState {
  boards: IBoardsState;
}

export const appReducer = {
  boards: boardsReducer,
};
