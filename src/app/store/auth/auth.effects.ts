import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../modules/auth-page/services/authentication.service';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private authService: AuthenticationService,
    private localService: LocalStorageService,
    private store: Store,
    private router: Router,
  ) {}
}
