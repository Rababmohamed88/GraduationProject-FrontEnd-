import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../_models/registration';
import { Login } from '../_models/login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private _registerUrl = 'https://localhost:44301/api/User/Register';
  constructor(
    private http: HttpClient,
    private jwtHelp: JwtHelperService,
    private router: Router
  ) {}

  registerUser(user: Registration) {
    return this.http.post<any>(
      'https://localhost:44301/api/User/Register',
      user
    );
  }
  loginUser(user: Login) {
    return this.http.post<any>('https://localhost:44301/api/User/login', user);
  }

  IsUserAuth() {
    const token: string = localStorage.getItem('token');
    if (token && !this.jwtHelp.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  Logout() {
    localStorage.removeItem('token');
    // this.IsUserAuth();
    this.router.navigate(['']);
  }
}
