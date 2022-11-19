import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { getAdvancedBoardById, IAppState } from 'src/app/store';
import { getColumns, loadColumns, updateColumn } from 'src/app/store/columns';
import { AddColumnModalComponent } from '../add-column-modal/add-column-modal.component';
import { IBoard } from '../board/models';
import { IColumn } from '../column';

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

  constructor(private store: Store<IAppState>, private router: Router, public matDialog: MatDialog) {}

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
        );
      }
    });
  }

  public dropColumns(event: CdkDragDrop<Array<IColumn>>): void {
    if (event.previousIndex !== event.currentIndex) {
      const tmpColumns: Array<IColumn> = this.columnsArray.map((a) => Object.assign({}, a));
      tmpColumns[event.previousIndex].order = event.currentIndex + 1;
      tmpColumns[event.currentIndex].order = event.previousIndex + 1;
      const column1: IColumn = tmpColumns[event.previousIndex];
      const column2: IColumn = tmpColumns[event.currentIndex];
      moveItemInArray(this.columnsArray, event.previousIndex, event.currentIndex);

      if (column1 && column2) {
        this.editOrderColumn(column1.title, column1.order as number, column1.id as string);
        this.editOrderColumn(column2.title, column2.order as number, column2.id as string);
      }
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

  public trackById(index: number, item: IColumn): string | undefined {
    return item.id;
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
