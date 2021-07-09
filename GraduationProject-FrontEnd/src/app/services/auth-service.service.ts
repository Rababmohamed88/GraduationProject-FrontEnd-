import { ServerResponse } from './../_models/server-response';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../_models/registration';
import { Login } from '../_models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
  private username = new BehaviorSubject<string>(localStorage.getItem('user'));
  private email = new BehaviorSubject<string>(localStorage.getItem('email'));

  registerUser(user: Registration) {
    return this.http.post<any>(
      'https://localhost:44301/api/User/Register',
      user
    );
  }
  loginUser(user: Login) {
    return this.http
      .post<ServerResponse>('https://localhost:44301/api/User/login', user)
      .pipe(
        map((result) => {
          if (result.isSuccess) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', result.fullname);
            localStorage.setItem('email', result.email);
            this.username.next(localStorage.getItem('user'));
            this.email.next(localStorage.getItem('email'));
          }
          return result;
        })
      );
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
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  get currentUserName() {
    return this.username.asObservable();
  }

  get currentEmail() {
    return this.email.asObservable();
  }
}
