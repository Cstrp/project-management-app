import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_THEME_FEATURE } from './theme.reducer';
import { AppTheme } from './models/appTheme';

const selectTheme = createFeatureSelector<AppTheme>(APP_THEME_FEATURE);

export const selectChanges = createSelector(selectTheme, (state) => state.changeTheme);
