import { Token } from './token';

export interface AuthState {
  login: string;
  loading: boolean;
  loaded: boolean;
  error: string;
  token?: Token;
}
