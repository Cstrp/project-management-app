import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn, SignUp, Token } from '../../../store/auth/models';
import { _httpOptions, SIGN_IN, SIGN_UP } from '../../../constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../shared/services';
import { Router } from '@angular/router';
import { selectError } from '../../../store/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public err$: Observable<string> = this.store.select(selectError);

  public isAuth: boolean = false;

  public isRegistered: Observable<boolean> = new Observable<boolean>((obs) => {
    obs.next(this.isAuth);
  });

  public login: BehaviorSubject<string> = new BehaviorSubject<string>('');

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
    this.localStorageService.removeData();
    this.router.navigate(['/']);
    this.isAuth = false;
    window.location.reload();
  }

  getLogin() {
    const login = this.localStorageService.getData('login');

    if (login) this.login.next(login);
    else this.login.next('Unauthorized');

    return this.login;
  }
}
