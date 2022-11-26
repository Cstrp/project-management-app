import { Token } from './token';

export interface AuthState {
  loading: boolean;
  loaded: boolean;
  error: string;
  token?: Token;
}
