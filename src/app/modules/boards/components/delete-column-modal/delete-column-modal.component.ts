import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { IColumn } from '../column';

@Component({
  selector: 'app-delete-column-modal',
  templateUrl: './delete-column-modal.component.html',
  styleUrls: ['./delete-column-modal.component.scss']
})
export class DeleteColumnModalComponent implements OnInit {

  public userId: string;

  public column: IColumn;

  constructor(
    private store: Store<IAppState>,
    private ref: MatDialogRef<DeleteColumnModalComponent>,
    public activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userId = params['delete'];
    });
  }

  public closeModal(): void {
    this.ref.close();
  }

  public deleteModal(): void {
    const id: string = this.userId;

    // this.store.dispatch(deleteColumn({ id }));
    this.closeModal();
  }
}
