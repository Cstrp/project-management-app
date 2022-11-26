import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_THEME_FEATURE } from './theme.reducer';
import { AppTheme } from './models/appTheme';

const selectTheme = createFeatureSelector<AppTheme>(APP_THEME_FEATURE);

export const selectLoad = createSelector(selectTheme, (state) => state.change);
export const selectLoadSuccess = createSelector(selectTheme, (state) => state.change);
export const selectUpdate = createSelector(selectTheme, (state) => state.change);
export const selectUpdateSuccess = createSelector(selectTheme, (state) => state.change);
