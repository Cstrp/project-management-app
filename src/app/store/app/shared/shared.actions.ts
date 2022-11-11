import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTION: string = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE: string = '[shared state] set error message';

const setLoadSpinner = createAction(SET_LOADING_ACTION, props<{ status: boolean }>());

const setErrMsg = createAction(SET_ERROR_MESSAGE, props<{ msg: string }>());

export { setLoadSpinner, setErrMsg };
