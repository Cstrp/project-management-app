import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, Subscription, throwError } from 'rxjs';
import { getAdvancedBoardById } from 'src/app/store';
import { getColumns, loadColumns, updateColumn } from 'src/app/store/columns';
import { IBoard } from '../board';
import { IColumn } from '../column';
import { AddColumnModalComponent } from '../add-column-modal';

@Component({
  selector: 'app-board-advanced',
  templateUrl: './board-advanced.component.html',
  styleUrls: ['./board-advanced.component.scss'],
})
export class BoardAdvancedComponent implements OnInit {
  public board: IBoard;

  public boardId: string;

  public boardSubscription: Subscription;

  public columns$: Observable<Array<IColumn>>;

  public columnsSubscription: Subscription;

  public columnsArray: Array<IColumn>;

  constructor(private store: Store, private router: Router, public matDialog: MatDialog) {}

  public ngOnInit(): void {
    this.boardSubscription = this.store.select(getAdvancedBoardById).subscribe((data: undefined | IBoard) => {
      if (data !== undefined) {
        this.board = data as IBoard;
        this.boardId = data?.id as string;
        const id: string = this.boardId;

        this.store.dispatch(loadColumns({ id }));
        this.columns$ = this.store.select(getColumns).pipe(
          map((value) => {
            this.columnsArray = [...value].sort((a: IColumn, b: IColumn) => {
              return (a.order as number) - (b.order as number);
            });

            return this.columnsArray;
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }
    });
  }

  public dropColumns(event: CdkDragDrop<Array<IColumn>>): void {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      let column1 = event.container.data[event.currentIndex];
      let column2 = event.container.data[event.previousIndex];

      this.editOrderColumn(column1.title, event.currentIndex + 1, column1.id as string);
      this.editOrderColumn(column2.title, event.previousIndex + 1, column2.id as string);
    }
  }

  public editOrderColumn(columnTitle: string, columnOrder: number, columnId: string) {
    const column: IColumn = {
      title: columnTitle,
      order: columnOrder,
    };
    const boardId: string = this.boardId;

    this.store.dispatch(updateColumn({ boardId, column, columnId }));
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

  ngOnDestroy() {
    this.boardSubscription.unsubscribe();
  }
}
