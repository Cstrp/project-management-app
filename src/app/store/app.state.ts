import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { columnsReducer, IColumnsState } from './columns';
import { boardsReducer, IBoardsState } from './boards';
import { ITasksState, tasksReducer } from './tasks';
import { AppTheme } from './app/theme/models/appTheme';
import { themeReducer } from './app/theme/theme.reducer';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/models';

export interface IAppState {
  boards: IBoardsState;
  router: RouterReducerState;
  columns: IColumnsState;
  tasks: ITasksState;
  theme: AppTheme;
  auth: AuthState;
}

export const appReducer = {
  boards: boardsReducer,
  router: routerReducer,
  columns: columnsReducer,
  tasks: tasksReducer,
  theme: themeReducer,
  auth: authReducer,
};
