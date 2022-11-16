import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { boardsReducer } from './boards/boards.reducer';
import { IBoardsState } from './boards/models';
import { columnsReducer, IColumnsState } from './columns';
import { ITasksState } from './tasks/models';
import { tasksReducer } from './tasks/tasks.reducer';

export interface IAppState {
  boards: IBoardsState;
  router: RouterReducerState;
  columns: IColumnsState;
  tasks: ITasksState
}

export const appReducer = {
  boards: boardsReducer,
  router: routerReducer,
  columns: columnsReducer,
  tasks: tasksReducer
};
