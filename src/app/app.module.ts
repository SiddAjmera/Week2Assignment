import { PrivateProfileGuard } from './guards/private-profile.guard';
import { DisplayDataService } from './services/display-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NotSelectedComponent } from './components/not-selected/not-selected.component';
import { IncrementComponent } from './components/increment/increment.component';
import { DecrementComponent } from './components/decrement/decrement.component';
import { DisplayComponent } from './components/display/display.component';
import { RestrictedAccessComponent } from './components/restricted-access/restricted-access.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListComponent,
    UserDetailComponent,
    NotSelectedComponent,
    IncrementComponent,
    DecrementComponent,
    DisplayComponent,
    RestrictedAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DisplayDataService, PrivateProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }