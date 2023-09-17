import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { TokenGuard } from '@core/guard/token/token.guard';
import { LoginService } from './shared/services/login/login.service';

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
    TokenGuard,
    LoginService
  ],
})
export class LoginModule {}
