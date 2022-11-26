import { createReducer, on } from '@ngrx/store';
import { loadSuccess, updateThemeSuccess } from './theme.action';
import { initialState } from './theme.state';

export const APP_THEME_FEATURE = 'theme';

export const themeReducer = createReducer(
  initialState,
  on(loadSuccess, (state, { change }) => {
    return { ...state, change };
  }),
  on(updateThemeSuccess, (state, { change }) => {
    return { ...state, change };
  }),
);
