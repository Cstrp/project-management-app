import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((i) => i.HomeModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/auth-page/auth-page.module').then((i) => i.AuthPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
