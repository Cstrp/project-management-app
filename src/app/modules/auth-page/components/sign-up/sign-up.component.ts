import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app/app.state';
import { signUpStart } from '../../../../store/auth/auth.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
  });

  public showPassword = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  errorMessage: string = '';

  isLoginFailed: boolean = false;

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,16}$'),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.authService.signUp(this.form.value).subscribe({
      next: (value) => {
        console.log(value);
        // this.store.dispatch(setLoadSpinner({ status: true }));
        this.store.dispatch(signUpStart({ user: this.form.value }));
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }
}
