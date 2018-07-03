import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {HttpServiceCore} from './http/HttpServiceCore.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: HttpServiceCore, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
