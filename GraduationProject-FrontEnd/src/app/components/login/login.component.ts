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

  async login() {
    let a = await this.registerSer.loginUser(this.user).toPromise();
    if (a.isSuccess) {
      this.router.navigate(['/profile'], {
        queryParams: { email: localStorage.getItem('email') },
      });
    }
  }
}
