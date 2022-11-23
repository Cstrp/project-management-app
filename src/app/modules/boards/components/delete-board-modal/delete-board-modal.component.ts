import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { deleteBoard } from 'src/app/store/boards/boards.actions';
import { IBoard } from '../board';

@Component({
  selector: 'app-delete-board-modal',
  templateUrl: './delete-board-modal.component.html',
  styleUrls: ['./delete-board-modal.component.scss'],
})
export class DeleteBoardModalComponent implements OnInit {
  public boardId: string;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private ref: MatDialogRef<DeleteBoardModalComponent>,
    public activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.boardId = params['delete'];
    });
  }

  public closeModal(): void {
    this.ref.close();
    this.router.navigateByUrl('boards');
  }

  public deleteModal(): void {
    const id: string = this.boardId;

    this.store.dispatch(deleteBoard({ id }));
    this.closeModal();
  }
}
