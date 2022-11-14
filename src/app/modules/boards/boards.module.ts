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
import { DeleteColumnModalComponent } from './components/delete-column-modal';
import { AddColumnModalComponent } from './components/add-column-modal';
import { ColumnsEffects } from 'src/app/store/columns';
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
    AddColumnModalComponent,
    DeleteColumnModalComponent,
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
    AddColumnModalComponent,
    DeleteColumnModalComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([BoardsEffects, ColumnsEffects]),
  ],
  providers: [_httpInterceptorProvider],
})
export class BoardsModule {}
