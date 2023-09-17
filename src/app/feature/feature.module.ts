import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { UsersRoutingModule } from './users/users-routing.module';

  @NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    LoginModule,
    UsersModule,

  ]
})
export class FeatureModule { }
