import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsRoutingModule } from './boards-routing.module';
import { MaterialModule } from '../material';
import {
  AddBoardComponent,
  AddBoardModalComponent,
  AddColumnModalComponent,
  AddTaskModalComponent,
  BoardAdvancedComponent,
  BoardComponent,
  BoardListComponent,
  BoardsNavigateComponent,
  BoardsPageComponent,
  ColumnComponent,
  DeleteBoardModalComponent,
  DeleteColumnModalComponent,
  DeleteTaskModalComponent,
  EditBoardModalComponent,
  EditTaskModalComponent,
  TaskComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { BoardsEffects } from 'src/app/store';
import { _httpInterceptorProvider } from '../../constants';
import { ColumnsEffects } from 'src/app/store/columns';
import { TasksEffects } from 'src/app/store/tasks/tasks.effects';

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
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    EditTaskModalComponent,
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
    AddTaskModalComponent,
    DeleteTaskModalComponent,
    EditTaskModalComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([BoardsEffects, ColumnsEffects, TasksEffects]),
  ],
  providers: [_httpInterceptorProvider],
})
export class BoardsModule {}
