  import { Injectable } from '@angular/core';
  import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { LoginService } from '@feature/login/shared/services/login/login.service';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root',
  })
  export class TokenGuard implements CanActivate {

    constructor(
      private loginService: LoginService,
      private router: Router,
      ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = this.loginService.getToken();
    if (token) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
    }


  }
