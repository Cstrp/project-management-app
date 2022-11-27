import { Token } from './token';

export interface SignIn {
  login: string;
  password: string;
  token?: Token;
  expirationDate?: Date;
}
