import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn, SignUp, Token } from '../../../store/auth/models';
import { _httpOptions, SIGN_IN, SIGN_UP } from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  signIn(usr: SignIn) {
    return this.http.post<Token>(SIGN_IN, usr, _httpOptions);
  }

  signUp(usr: SignUp) {
    return this.http.post<SignUp>(SIGN_UP, usr, _httpOptions);
  }

  // signUp(usr: SignUp) {
  //   return this.http.post(SIGN_UP, usr, _httpOptions).pipe(
  //     catchError((err) => {
  //       console.error(err);
  //
  //       return throwError(err);
  //     }),
  //   );
  // }
  //
  // signIn(usr: SignIn) {
  //   return this.http.post(SIGN_IN, usr, _httpOptions);
  // }
}
