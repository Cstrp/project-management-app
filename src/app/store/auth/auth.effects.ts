import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../modules/auth-page/services/authentication.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginFailed, loginStart, loginSuccess, signUpFailed, signUpStart, signUpSuccess } from './auth.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthenticationService) {}

  signIn = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      switchMap((action) =>
        this.authService.signIn({ login: action.login, password: action.password }).pipe(
          map((success) => loginSuccess(success)),
          catchError((err) => of(loginFailed({ error: err.message }))),
        ),
      ),
    );
  });

  signUp = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpStart),
      switchMap((action) =>
        this.authService.signUp({ login: action.login, name: action.name, password: action.password }).pipe(
          map((success) => signUpSuccess(success)),
          catchError((err) => of(signUpFailed({ error: err.message }))),
        ),
      ),
    );
  });
}
