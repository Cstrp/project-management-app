import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../material/services/snack-bar.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.components.scss'],
})
export class ComingSoonComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  constructor(private snackBarService: SnackBarService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  oops(): void {
    const formValue = this.form.value.email;

    if (this.form.valid) this.snackBarService.openSnackBar('Really???', formValue);
  }
}
