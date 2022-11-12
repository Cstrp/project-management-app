import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsRoutingModule } from './boards-routing.module';
import { MaterialModule } from '../material';
import {
  AddBoardComponent,
  AddBoardModalComponent,
  BoardAdvancedComponent,
  BoardComponent,
  BoardListComponent,
  BoardsPageComponent,
  ColumnComponent,
  EditBoardModalComponent,
  TaskComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteBoardModalComponent } from './components/delete-board-modal';
import { BoardsNavigateComponent } from './components/boards-navigate';
import { EffectsModule } from '@ngrx/effects';
import { BoardsEffects } from 'src/app/store';
import { _httpInterceptorProvider } from '../../constants';

@NgModule({
  declarations: [
    BoardListComponent,
    BoardComponent,
    BoardsPageComponent,
    ColumnComponent,
    TaskComponent,
    BoardAdvancedComponent,
    AddBoardComponent,
    AddBoardModalComponent,
    EditBoardModalComponent,
    DeleteBoardModalComponent,
    BoardsNavigateComponent,
  ],
  exports: [
    BoardListComponent,
    BoardComponent,
    BoardsPageComponent,
    ColumnComponent,
    TaskComponent,
    AddBoardComponent,
    AddBoardModalComponent,
    EditBoardModalComponent,
    DeleteBoardModalComponent,
    BoardsNavigateComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([BoardsEffects]),
  ],
  providers: [
    _httpInterceptorProvider,
  ],
})
export class BoardsModule {}
