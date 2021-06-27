import { Router } from '@angular/router';
import { ServerResponse } from './../../_models/server-response';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Registration } from 'src/app/_models/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  user: Registration = new Registration();
  response: ServerResponse = new ServerResponse();

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

  register() {
    this.registerSer.registerUser(this.user).subscribe((a) => {
      this.response = a;
      if (this.response.isSuccess) {
        this.router.navigate(['/login']);
      }
    });
  }
}
