import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { selectError, selectLoaded, selectLoading } from '../../../../store/auth/auth.selector';
import { loginStart } from '../../../../store/auth/auth.action';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  public errorMessage: string = '';

  public showPassword: boolean = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  loading$: Observable<boolean> = this.store.select(selectLoading);

  loaded$: Observable<boolean> = this.store.select(selectLoaded);

  err$: Observable<string> = this.store.select(selectError);

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.store.dispatch(loginStart(this.form.value));
    this.form.reset();
  }
}
