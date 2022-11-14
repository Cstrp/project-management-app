import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getAdvancedBoardById, IAppState } from 'src/app/store';
import { AddColumnModalComponent } from '../add-column-modal/add-column-modal.component';
import { IBoard } from '../board/models';

@Component({
  selector: 'app-board-advanced',
  templateUrl: './board-advanced.component.html',
  styleUrls: ['./board-advanced.component.scss'],
})
export class BoardAdvancedComponent implements OnInit {
  public board: Observable<IBoard | undefined>;
  public boardId: string | undefined;
  public boardSubscription: Subscription;

  constructor(private store: Store<IAppState>, private router: Router, public matDialog: MatDialog) {}

  public ngOnInit(): void {
    this.board = this.store.select(getAdvancedBoardById);
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
    });
  }
}
