import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteColumn } from 'src/app/store/columns';

@Component({
  selector: 'app-delete-column-modal',
  templateUrl: './delete-column-modal.component.html',
  styleUrls: ['./delete-column-modal.component.scss'],
})
export class DeleteColumnModalComponent implements OnInit {
  public boardId: string;

  public columnId: string;

  constructor(
    private store: Store,
    private ref: MatDialogRef<DeleteColumnModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { boardId: string; columnId: string },
  ) {
    this.boardId = data.boardId;
    this.columnId = data.columnId;
  }

  public ngOnInit(): void {}

  public closeModal(): void {
    this.ref.close();
  }

  public deleteModal(): void {
    const boardId: string = this.boardId;
    const columnId: string = this.columnId;

    this.store.dispatch(deleteColumn({ boardId, columnId }));
    this.closeModal();
  }
}
