import { createAction, props } from '@ngrx/store';
import { _auth } from '../../enums';

export const loginStart = createAction(_auth.LOGIN_START, props<{ login: string; password: string; auth?: boolean }>());
export const loginSuccess = createAction(_auth.LOGIN_SUCCESS, props<{ token: string; auth?: boolean }>());
export const loginFailed = createAction(_auth.LOGIN_FAIL, props<{ error: string; auth?: boolean }>());

export const updateUserStart = createAction(_auth.UPDATE_START, props<{ id: string; name: string; login: string }>());
export const updateUserSuccess = createAction(_auth.UPDATE_SUCCESS, props<{ name: string; login: string }>());
export const updateUserFailed = createAction(_auth.UPDATE_FAILED);

export const isAuth = createAction('[auth page] is auth', props<{ auth: boolean }>());

export const getTokenStart = createAction(_auth.GET_TOKEN_START, props<{ token: string }>());
export const getTokenSuccess = createAction(_auth.GET_TOKEN_SUCCESS, props<{ token: string }>());
export const getTokenFailed = createAction(_auth.GET_TOKEN_FAIL, props<{ error: string }>());

export const signUpStart = createAction(_auth.SIGNUP_START, props<{ name: string; login: string; password: string }>());
export const signUpSuccess = createAction(_auth.SIGNUP_SUCCESS, props<{ id?: string; name: string; login: string }>());
export const signUpFailed = createAction(_auth.SIGNUP_FAIL, props<{ error: string }>());

export const autoLogin = createAction(_auth.AUTO_LOGIN);

export const logoutStart = createAction(_auth.LOGOUT_START);
export const logoutSuccess = createAction(_auth.LOGOUT_SUCCESS);

export const dummyAction = createAction('[Source] [dummy action]');
