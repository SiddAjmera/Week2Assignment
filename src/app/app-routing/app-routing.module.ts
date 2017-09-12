import { PrivateProfileGuard } from './../guards/private-profile.guard';
import { RestrictedAccessComponent } from './../components/restricted-access/restricted-access.component';
import { DisplayComponent } from './../components/display/display.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotSelectedComponent } from './../components/not-selected/not-selected.component';
import { UserDetailComponent } from './../components/user-detail/user-detail.component';
import { UserListComponent } from './../components/user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent, children: [
    { path: '', component: NotSelectedComponent },
    { path: 'restricted', component: RestrictedAccessComponent },
    { path: ':id', canActivate: [PrivateProfileGuard], component: UserDetailComponent },
  ] },
  { path: 'subjects', component: DisplayComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }