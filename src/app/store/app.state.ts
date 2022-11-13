import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { boardsReducer } from './boards/boards.reducer';
import { IBoardsState } from './boards/models';

export interface IAppState {
  boards: IBoardsState;
  router: RouterReducerState;
}

export const appReducer = {
  boards: boardsReducer,
  router: routerReducer
};
