import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { loginStart } from '../../../../store/auth/auth.action';
import { LocalStorageService } from '../../../../services/local-storage.service';

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

  public str: string = '';

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  constructor(
    private authService: AuthenticationService,
    private localService: LocalStorageService,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.str = this.localService.getData('user');
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.authService.signIn(this.form.value).subscribe({
      next: (value) => {
        console.log(value);
        this.localService.saveData('user', JSON.stringify(value));
        this.store.dispatch(loginStart({ user: this.form.value }));
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
