import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUpStart } from '../../../../store/auth/auth.action';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
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

  public str: string = '';

  constructor(
    private authService: AuthenticationService,
    private localService: LocalStorageService,
    private fb: FormBuilder,
    private store: Store,
  ) {}

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

    this.str = this.localService.getData('USER');
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.authService.signUp(this.form.value).subscribe({
      next: (value) => {
        console.log(value);
        this.localService.saveData('USER', JSON.stringify(value));
        this.store.dispatch(signUpStart({ user: this.form.value }));
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }
}
