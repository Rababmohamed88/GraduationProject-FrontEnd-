import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loginStatus$ = new BehaviorSubject<boolean>(null);
  username$: Observable<string>;
  email$: Observable<string>;
  un: string;

  constructor(public auth: AuthServiceService) {}

  logout() {
    this.auth.Logout();
  }

  ngOnInit() {
    this.username$ = this.auth.currentUserName;
    this.email$ = this.auth.currentEmail;
  }
}
