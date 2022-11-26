import { createAction, props } from '@ngrx/store';

export enum appTheme {
  load = '[App theme] Load',
  loadSuccess = '[App Theme] Load Success',
  update = '[App Theme] Update',
  updateSuccess = '[App Theme] Update Success',
}

export const loadTheme = createAction(appTheme.load, props<{ change: boolean }>());
export const loadSuccess = createAction(appTheme.loadSuccess, props<{ change: boolean }>());

export const updateTheme = createAction(appTheme.update, props<{ change: boolean }>());
export const updateThemeSuccess = createAction(appTheme.updateSuccess, props<{ change: boolean }>());
