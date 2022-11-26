import { Token } from './token';

export interface SignIn {
  login: string;
  password: string;
  error?: string;
  token?: Token;
}
