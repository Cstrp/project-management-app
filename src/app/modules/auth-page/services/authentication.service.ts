import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { _httpOptions, SIGN_IN, SIGN_UP } from '../../../constants';
import { SignIn } from '../../../store/auth/models/signIn';
import { SignUp } from '../../../store/auth/models/signUp';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private store: Store) {}

  signUp(usr: SignUp) {
    return this.http.post(SIGN_UP, usr, _httpOptions).pipe(
      catchError((err) => {
        console.error(err);

        return throwError(err);
      }),
    );
  }

  signIn(usr: SignIn) {
    return this.http.post(SIGN_IN, usr, _httpOptions);
  }
}
