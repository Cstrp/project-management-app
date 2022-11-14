import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { getAdvancedBoardById, IAppState } from 'src/app/store';
import { getColumns, loadColumns } from 'src/app/store/columns';
import { AddColumnModalComponent } from '../add-column-modal/add-column-modal.component';
import { IBoard } from '../board/models';
import { IColumn } from '../column';

@Component({
  selector: 'app-board-advanced',
  templateUrl: './board-advanced.component.html',
  styleUrls: ['./board-advanced.component.scss'],
})
export class BoardAdvancedComponent implements OnInit {
  public board: Observable<IBoard | undefined>;
  public boardId: string;
  public boardSubscription: Subscription;
  public columns$: Observable<Array<IColumn>>;
  public columnsSubscription: Subscription;

  constructor(private store: Store<IAppState>, private router: Router, public matDialog: MatDialog) {}

  public ngOnInit(): void {
    this.board = this.store.select(getAdvancedBoardById);
    this.boardSubscription = this.store.select(getAdvancedBoardById).subscribe((data) => {
      if (data?.id) {
        this.boardId = data?.id;
        const id: string = this.boardId;
        this.store.dispatch(loadColumns({ id }));
      }
    });
    this.columns$ = this.store
      .select(getColumns)
      .pipe(
        map((value) =>
          [...value].sort((a, b) => (<string>a.id).localeCompare(<string>b.id, undefined, { numeric: false })),
        ),
      );
  }

  public goToBoards(): void {
    this.router.navigateByUrl('boards');
  }

  public goToHome(): void {
    this.router.navigateByUrl('');
  }

  public openAddColumnModal(): void {
    this.matDialog.open(AddColumnModalComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        boardId: this.boardId,
      },
    });
  }
}
