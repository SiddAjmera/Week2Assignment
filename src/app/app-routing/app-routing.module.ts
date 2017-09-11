import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotSelectedComponent } from './../components/not-selected/not-selected.component';
import { UserDetailComponent } from './../components/user-detail/user-detail.component';
import { UserListComponent } from './../components/user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent, children: [
    { path: '', component: NotSelectedComponent },
    { path: ':id', component: UserDetailComponent }
  ] },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }