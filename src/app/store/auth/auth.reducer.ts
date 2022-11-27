import { Token } from './models';
import { createReducer, on } from '@ngrx/store';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  signUpFailed,
  signUpStart,
  signUpSuccess,
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
} from './auth.action';
import { initialState } from './auth.state';

export const authReducer = createReducer(
  initialState,
  on(loginStart, (state) => ({ ...state, loading: true })),
  on(loginSuccess, (state, token: Token) => ({ ...state, token, loaded: true, loading: false, error: '' })),
  on(loginFailed, (state, { error }) => ({ ...state, token: undefined, loaded: true, loading: false, error })),

  on(signUpStart, (state) => ({ ...state, loading: true })),
  on(signUpSuccess, (state) => ({ ...state, loaded: true, loading: false, error: '' })),
  on(signUpFailed, (state, { error }) => ({ ...state, token: undefined, loaded: true, loading: false, error })),

  on(updateUserStart, (state) => ({ ...state, loading: true })),
  on(updateUserSuccess, (state) => ({ ...state, loaded: true, loading: false, error: '' })),
  on(updateUserFailed, (state, { type }) => ({ ...state, token: undefined, loaded: true, loading: false, type })),
);
