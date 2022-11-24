import { createAction, props } from '@ngrx/store';

export const changeTheme = createAction('[App Theme] Change', props<{ change: boolean }>());
