import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private jwthelp: JwtHelperService) {}
  canActivate() {
    const token = localStorage.getItem('token');

    if (token && !this.jwthelp.isTokenExpired(token)) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
