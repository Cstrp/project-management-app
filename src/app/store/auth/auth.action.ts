import { createAction, props } from '@ngrx/store';
import { Usr } from './models/usr';
import { SignUp } from './models/signUp';
import { SignIn } from './models/signIn';

const LOGIN_START: string = '[auth page] login start';
const LOGIN_SUCCESS: string = '[auth page] login Success';
const LOGIN_FAIL: string = '[auth page] login Fail';

const SIGNUP_START = '[auth page] signup start';
const SIGNUP_SUCCESS = '[auth page] signup success';
const AUTO_LOGIN_ACTION = '[auth page] auto login';
const LOGOUT_ACTION = '[auth page] logout';

const loginStart = createAction(LOGIN_START, props<{ user: SignIn }>());

const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: Usr; redirect: boolean }>());

const signUpStart = createAction(SIGNUP_START, props<{ user: SignUp }>());

const signUpSuccess = createAction(SIGNUP_SUCCESS, props<{ user: Usr; redirect: boolean }>());

const autoLogin = createAction(AUTO_LOGIN_ACTION);
const autoLogout = createAction(LOGOUT_ACTION);
const dummyAction = createAction('[Source] [dummy action]');

export {
  loginStart,
  LOGIN_START,
  loginSuccess,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  signUpStart,
  SIGNUP_START,
  signUpSuccess,
  SIGNUP_SUCCESS,
  autoLogin,
  AUTO_LOGIN_ACTION,
  autoLogout,
  LOGOUT_ACTION,
  dummyAction,
};
