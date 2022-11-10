import { Action, createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';
import { autoLogout, loginSuccess, signUpSuccess } from './auth.action';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => ({ ...state, user: action.user })),
  on(signUpSuccess, (state, action) => ({ ...state, user: action.user })),
  on(autoLogout, (state) => ({ ...state, user: null })),
);

const AuthReducer = (state: AuthState | undefined, action: Action) => _authReducer(state, action);

export { AuthReducer, _authReducer };
