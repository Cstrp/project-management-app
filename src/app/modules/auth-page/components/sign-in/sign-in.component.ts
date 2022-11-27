import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { loginStart } from '../../../../store/auth/auth.action';
import { SnackBarService } from '../../../shared/material/services/snack-bar.service';

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

  constructor(
    public authService: AuthenticationService,
    private fb: FormBuilder,
    private store: Store,
    private snackBarService: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    });

    this.authService.err$.subscribe((i) => (this.errorMessage = i));
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    if (this.errorMessage) {
      this.snackBarService.openSnackBar(this.errorMessage, 'Dismiss');
    } else {
      this.snackBarService.openSnackBar('Done', 'Dismiss');
    }

    const login = this.form.value.login;
    const password = this.form.value.password;

    this.store.dispatch(loginStart({ login: login, password: password, auth: true }));
    this.form.reset();
  }
}
