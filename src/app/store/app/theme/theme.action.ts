import { createAction, props } from '@ngrx/store';
import { appTheme } from '../../../enums';

export const loadTheme = createAction(appTheme.load, props<{ change: boolean }>());
export const loadSuccess = createAction(appTheme.loadSuccess, props<{ change: boolean }>());

export const updateTheme = createAction(appTheme.update, props<{ change: boolean }>());
export const updateThemeSuccess = createAction(appTheme.updateSuccess, props<{ change: boolean }>());
