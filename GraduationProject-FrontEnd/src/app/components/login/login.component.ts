import { Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Login } from '../../_models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  user: Login = new Login('', '');

  constructor(
    private elementRef: ElementRef,
    private registerSer: AuthServiceService,
    private router: Router
  ) {}
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#f9f9f9';
  }
  ngOnInit(): void {}
  login() {
    this.registerSer.loginUser(this.user).subscribe((a) => {
      localStorage.setItem('token', a.token);
      localStorage.setItem('user', a.message);
      this.router.navigate(['/profile']);
    });
  }
}
