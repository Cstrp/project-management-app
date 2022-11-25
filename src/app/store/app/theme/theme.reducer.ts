import { createReducer, on } from '@ngrx/store';
import { changeTheme } from './theme.action';
import { initialState } from './theme.state';

export const APP_THEME_FEATURE = 'theme';

export const themeReducer = createReducer(
  initialState,
  on(changeTheme, (state) => ({
    ...state,
    change: !state.change,
  })),
);
