import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../modules/auth-page/services/authentication.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  signUpFailed,
  signUpStart,
  signUpSuccess,
} from './auth.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../modules/shared/services';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  signIn = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      switchMap((action) =>
        this.authService.signIn({ login: action.login, password: action.password }).pipe(
          map((success) => {
            this.localStorageService.saveData('login', action.login);
            this.localStorageService.saveData('token', success.token);

            return loginSuccess({ token: success.token, auth: true });
          }),
          catchError((err) => {
            return of(loginFailed({ error: err.message, auth: false }));
          }),
        ),
      ),
    );
  });

  signUp = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpStart),
      switchMap((action) =>
        this.authService.signUp({ login: action.login, name: action.name, password: action.password }).pipe(
          map((success) => {
            return signUpSuccess(success);
          }),
          catchError((err) => {
            return of(signUpFailed({ error: err.message }));
          }),
        ),
      ),
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logoutStart),
        map(() => {
          this.router.navigate(['/']);
          this.authService.logOut();
          of(logoutSuccess);
        }),
      );
    },
    { dispatch: false },
  );
}
