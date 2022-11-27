import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn, SignUp, Token } from '../../../store/auth/models';
import { _httpOptions, _userKey, SIGN_IN, SIGN_UP } from '../../../constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { selectError, selectIsAuth, selectLoaded, selectLoading, selectToken } from '../../../store/auth/auth.selector';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../shared/services';
import { Router } from '@angular/router';
import { getTokenSuccess } from '../../../store/auth/auth.action';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loading$: Observable<boolean> = this.store.select(selectLoading);

  loaded$: Observable<boolean> = this.store.select(selectLoaded);

  err$: Observable<string> = this.store.select(selectError);

  token$: Observable<string | undefined> = this.store.select(selectToken);

  isAuth: Observable<boolean> = this.store.select(selectIsAuth);

  private login: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  public signIn(usr: SignIn) {
    return this.http.post<Token>(SIGN_IN, usr, _httpOptions);
  }

  public signUp(usr: SignUp) {
    return this.http.post<SignUp>(SIGN_UP, usr, _httpOptions);
  }

  public logOut(): void {
    this.localStorageService.removeItem(_userKey);
    this.router.navigate(['/']);
  }

  loadToken() {
    const token = this.localStorageService.getData('token');

    if (token) {
      this.store.dispatch(getTokenSuccess({ token: JSON.parse(token) }));
    }
  }
}
