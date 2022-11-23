import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, catchError, of, throwError } from 'rxjs';
import { IAppState } from 'src/app/store';
import { getBoards } from 'src/app/store/boards/boards.selector';
import { IBoard } from '../board/models';
import { MatDialog } from '@angular/material/dialog';
import { AddBoardModalComponent } from '../add-board-modal';
import { loadBoards } from 'src/app/store/boards/boards.actions';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  public boards$: Observable<Array<IBoard>>;

  public title: string;

  constructor(private store: Store<IAppState>, public matDialog: MatDialog) {}

  public ngOnInit(): void {
    this.boards$ = this.store.select(getBoards).pipe(
      map((value) =>
        [...value].sort((a, b) => (<string>a.id).localeCompare(<string>b.id, undefined, { numeric: false })),
      ),
      catchError((errResp) => {
        return throwError(errResp);
      }),
    );
    this.title = 'Boards';
    this.store.dispatch(loadBoards());
  }

  public openPopup(): void {
    this.matDialog.open(AddBoardModalComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }
}
