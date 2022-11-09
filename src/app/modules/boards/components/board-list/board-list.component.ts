import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store';
import { getBoards } from 'src/app/store/boards/boards.selector';
import { IBoard } from '../board/models';
import { MatDialog } from '@angular/material/dialog';
import { AddBoardModalComponent } from '../add-board-modal';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  boards$: Observable<Array<IBoard>>;
  public title: string;

  constructor(private store: Store<IAppState>, public matDialog: MatDialog) {}

  public ngOnInit(): void {
    this.boards$ = this.store.select(getBoards);
    this.title = 'Boards';
  }

  public openPopup(): void {
    this.matDialog.open(AddBoardModalComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }
}
