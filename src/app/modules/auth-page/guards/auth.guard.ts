import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { LocalStorageService } from '../../shared/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isRegistered.pipe(
      map((ok) => {
        const copy = this.localStorageService.getData('isAuth');

        ok = JSON.parse(copy);

        if (!ok) {
          this.router.navigate(['/']);
        }

        return ok;
      }),
    );
  }
}
