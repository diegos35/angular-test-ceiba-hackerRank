import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { TokenGuard } from '@core/guard/token/token.guard';
import { LoginService } from './shared/services/login/login.service';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    CoreModule
  ],
  providers: [
    LoginService
  ],
})
export class LoginModule {}
