import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username$: Observable<string>;
  email$: Observable<string>

  constructor(public auth: AuthServiceService) {}

  logout() {
    this.auth.Logout();
  }

  ngOnInit(): void {
    this.username$ = this.auth.currentUserName;
    this.email$ = this.auth.currentEmail;
  }
}
