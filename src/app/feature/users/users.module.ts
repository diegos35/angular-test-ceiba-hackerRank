import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@shared/shared.module';
import { UsersService } from './create-user/shared/services/users/users.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeUserComponent,
    NavBarComponent,
    ListUsersComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {
}
