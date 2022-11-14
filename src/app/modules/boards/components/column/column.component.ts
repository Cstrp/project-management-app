import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteColumnModalComponent } from '../delete-column-modal';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  public isEditMode: boolean = false;
  public editColumnForm: FormGroup;
  public statusForm: string = 'VALID';
  public columnTitle: string = '';

  constructor(public matDialog: MatDialog) {}

  ngOnInit(): void {
    this.editColumnForm = new FormGroup({
      columnTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    this.editColumnForm.statusChanges.subscribe((value) => {
      if (this.editColumnForm.dirty) {
        this.statusForm = value;
      }
    });
  }

  public openDeleteColumnModal(): void {
    this.matDialog.open(DeleteColumnModalComponent, {
      width: '15%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }

  public toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  public editColumn(): void {
    this.columnTitle = this.editColumnForm.controls['columnTitle'].value;
    console.log(this.columnTitle);
    // const column: IColumn = {
    //   title: this.title,
    // };
    // this.store.dispatch(updateColumn({ column }));
  }
}
