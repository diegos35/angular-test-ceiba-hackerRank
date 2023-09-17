import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
})
export class LoginModule {}
