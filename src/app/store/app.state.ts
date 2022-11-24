import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { columnsReducer, IColumnsState } from './columns';
import { boardsReducer, IBoardsState } from './boards';
import { ITasksState, tasksReducer } from './tasks';

export interface IAppState {
  boards: IBoardsState;
  router: RouterReducerState;
  columns: IColumnsState;
  tasks: ITasksState;
}

export const appReducer = {
  boards: boardsReducer,
  router: routerReducer,
  columns: columnsReducer,
  tasks: tasksReducer,
};
