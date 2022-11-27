import { AuthState } from './models';

export const AUTH_FEATURE_NAME = 'auth';

export const initialState: AuthState = {
  login: '',
  loaded: true,
  loading: false,
  error: '',
};
