import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { IColumn } from '../column';

@Component({
  selector: 'app-add-column-modal',
  templateUrl: './add-column-modal.component.html',
  styleUrls: ['./add-column-modal.component.scss'],
})
export class AddColumnModalComponent implements OnInit {
  public addColumnForm: FormGroup;

  public statusForm: string = 'VALID';

  public title: string;

  public description: string;

  constructor(
    private store: Store<IAppState>,
    private ref: MatDialogRef<AddColumnModalComponent>,
  ) {}

  public ngOnInit(): void {
    this.addColumnForm = new FormGroup({
      columnTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    this.addColumnForm.statusChanges.subscribe((value) => {
      if (this.addColumnForm.dirty) {
        this.statusForm = value;
      }
    });

    this.title = this.addColumnForm.controls['columnTitle'].value;
    this.description = this.addColumnForm.controls['columnDescription'].value;
  }

  public closeModal(): void {
    this.addColumnForm.reset();
    this.addColumnForm.markAsUntouched();
    this.addColumnForm.markAsPristine();
    this.ref.close();
  }

  public onSubmit(): void {
    this.title = this.addColumnForm.controls['columnTitle'].value;
    // const column: IColumn = {
    //   title: this.title,
    // };
    // this.store.dispatch(addColumn({ column }));
    this.closeModal();
  }
}
