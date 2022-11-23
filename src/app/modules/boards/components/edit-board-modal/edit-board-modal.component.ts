import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { updateBoard } from 'src/app/store/boards/boards.actions';
import { getBoardById } from 'src/app/store/boards/boards.selector';
import { IBoard } from '../board';

@Component({
  selector: 'app-edit-board-modal',
  templateUrl: './edit-board-modal.component.html',
  styleUrls: ['./edit-board-modal.component.scss'],
})
export class EditBoardModalComponent implements OnInit {
  public editBoardForm: FormGroup;

  public statusForm: string = 'VALID';

  public title: string;

  public description: string;

  public userId: string;

  public board: IBoard;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private ref: MatDialogRef<EditBoardModalComponent>,
    public activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userId = params['edit'];
      const id: string = this.userId;

      this.store.select(getBoardById, { id }).subscribe((data) => {
        this.board = data;
      });
    });

    this.editBoardForm = new FormGroup({
      boardTitle: new FormControl(this.board.title, [Validators.required, Validators.minLength(3)]),
      boardDescription: new FormControl(this.board.description, [Validators.required, Validators.minLength(3)]),
    });

    this.editBoardForm.statusChanges.subscribe((value) => {
      if (this.editBoardForm.dirty) {
        this.statusForm = value;
      }
    });

    this.title = this.editBoardForm.controls['boardTitle'].value;
    this.description = this.editBoardForm.controls['boardDescription'].value;
  }

  public closeModal(): void {
    this.editBoardForm.reset();
    this.editBoardForm.markAsUntouched();
    this.editBoardForm.markAsPristine();
    this.ref.close();
    this.router.navigateByUrl('boards');
  }

  public onSubmit(): void {
    this.title = this.editBoardForm.controls['boardTitle'].value;
    this.description = this.editBoardForm.controls['boardDescription'].value;
    const board: IBoard = {
      id: this.board.id,
      title: this.title,
      description: this.description,
    };

    this.store.dispatch(updateBoard({ board }));
    this.closeModal();
  }
}
