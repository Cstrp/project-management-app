import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdvancedComponent, BoardsPageComponent } from './components';
import { AuthGuard } from '../auth-page/guards/auth.guard';

const routes: Routes = [
  { path: 'boards', component: BoardsPageComponent, canActivate: [AuthGuard] },
  {
    path: 'boards/:id',
    component: BoardAdvancedComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
