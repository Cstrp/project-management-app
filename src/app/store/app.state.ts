import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { boardsReducer } from './boards/boards.reducer';
import { IBoardsState } from './boards/models';
import { columnsReducer, IColumnsState } from './columns';

export interface IAppState {
  boards: IBoardsState;
  router: RouterReducerState;
  columns: IColumnsState
}

export const appReducer = {
  boards: boardsReducer,
  router: routerReducer,
  columns: columnsReducer
};
