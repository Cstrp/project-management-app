import { createAction, props } from '@ngrx/store';

export const loadTheme = createAction('[App theme] Load');
export const loadSuccess = createAction('[App Theme] Load Success');

export const update = createAction('[App Theme] Update');
export const updateSuccess = createAction('[App Theme] Update');

export const changeTheme = createAction('[App Theme] Change', props<{ change: boolean }>());
