import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getAdvancedBoardById, IAppState } from 'src/app/store';
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

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.board = this.store.select(getAdvancedBoardById);
  }

  public ngOnDestroy(): void {
    this.boardSubscription.unsubscribe();
  }
}
