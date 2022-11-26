import { createAction, props } from '@ngrx/store';
import { _auth } from '../../enums';

export const loginStart = createAction(_auth.LOGIN_START, props<{ login: string; password: string }>());
export const loginSuccess = createAction(_auth.LOGIN_SUCCESS, props<{ token: string }>());
export const loginFailed = createAction(_auth.LOGIN_FAIL, props<{ error: string }>());

export const updateUserStart = createAction(_auth.UPDATE_START, props<{ id: string; name: string; login: string }>);
export const updateUserSuccess = createAction(_auth.UPDATE_SUCCESS, props<{ name: string; login: string }>);
export const updateUserFailed = createAction(_auth.UPDATE_FAILED);

export const signUpStart = createAction(_auth.SIGNUP_START, props<{ name: string; login: string; password: string }>());
export const signUpSuccess = createAction(_auth.SIGNUP_SUCCESS, props<{ id: string; name: string; login: string }>());
export const signUpFailed = createAction(_auth.SIGNUP_FAIL, props<{ error: string }>());

export const logout = createAction(_auth.LOGOUT_ACTION);

export const dummyAction = createAction('[Source] [dummy action]');
