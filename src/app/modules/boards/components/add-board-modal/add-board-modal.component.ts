import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { addBoard } from 'src/app/store/boards/boards.actions';
import { IBoard } from '../board';

@Component({
  selector: 'app-add-board-modal',
  templateUrl: './add-board-modal.component.html',
  styleUrls: ['./add-board-modal.component.scss'],
})
export class AddBoardModalComponent implements OnInit {
  public addBoardForm: FormGroup;

  public statusForm: string = 'VALID';

  public title: string;

  public description: string;

  constructor(
    private store: Store<IAppState>,
    private route: Router,
    private ref: MatDialogRef<AddBoardModalComponent>,
  ) {}

  public ngOnInit(): void {
    this.addBoardForm = new FormGroup({
      boardTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      boardDescription: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    this.addBoardForm.statusChanges.subscribe((value) => {
      if (this.addBoardForm.dirty) {
        this.statusForm = value;
      }
    });

    this.title = this.addBoardForm.controls['boardTitle'].value;
    this.description = this.addBoardForm.controls['boardDescription'].value;
  }

  public closeModal(): void {
    this.addBoardForm.reset();
    this.addBoardForm.markAsUntouched();
    this.addBoardForm.markAsPristine();
    this.ref.close();
    this.route.navigateByUrl('boards');
  }

  public onSubmit(): void {
    this.title = this.addBoardForm.controls['boardTitle'].value;
    this.description = this.addBoardForm.controls['boardDescription'].value;
    const board: IBoard = {
      title: this.title,
      description: this.description,
    };

    this.store.dispatch(addBoard({ board }));
    this.closeModal();
  }
}
