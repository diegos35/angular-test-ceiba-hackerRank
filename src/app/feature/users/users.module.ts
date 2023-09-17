import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';


@NgModule({
  declarations: [
    HomeUserComponent,
    NavBarComponent,
    ListUsersComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  ]
})
export class UsersModule {
}
