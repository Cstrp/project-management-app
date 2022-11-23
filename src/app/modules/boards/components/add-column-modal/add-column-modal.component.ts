import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addColumn } from 'src/app/store/columns';
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

  public boardId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private ref: MatDialogRef<AddColumnModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { boardId: string },
  ) {
    this.boardId = data.boardId;
  }

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
  }

  public closeModal(): void {
    this.addColumnForm.reset();
    this.addColumnForm.markAsUntouched();
    this.addColumnForm.markAsPristine();
    this.ref.close();
  }

  public onSubmit(): void {
    this.title = this.addColumnForm.controls['columnTitle'].value;
    const column: IColumn = {
      title: this.title,
    };
    const id: string = this.boardId;

    this.store.dispatch(addColumn({ id, column }));
    this.closeModal();
  }
}
