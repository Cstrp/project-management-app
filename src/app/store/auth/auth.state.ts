import { AuthState } from './models';

export const AUTH_FEATURE_NAME = 'auth';

export const initialState: AuthState = {
  loaded: true,
  loading: false,
  error: '',
};
