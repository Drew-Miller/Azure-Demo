import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultModule = 'home';

const routes: Routes = [
  { path: '', redirectTo: defaultModule, pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('pages/home/home.module').then(x => x.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
