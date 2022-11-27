import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUpStart } from '../../../../store/auth/auth.action';
import { SnackBarService } from '../../../shared/material/services/snack-bar.service';

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

  private err: string = '';

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private store: Store,
    private snackBarService: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,16}$'),
        ],
      ],
    });

    this.authService.err$.subscribe((i) => (this.err = i));
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    if (this.err) {
      this.snackBarService.openSnackBar(this.err, 'Dismiss');
    } else {
      this.snackBarService.openSnackBar('Done', 'Dismiss');
    }

    this.store.dispatch(signUpStart(this.form.value));
    this.form.reset();
  }
}
