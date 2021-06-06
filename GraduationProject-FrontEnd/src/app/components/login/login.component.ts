import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Login } from '../../_models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,AfterViewInit{
  user:Login=new Login("","");

  constructor(private elementRef: ElementRef,private registerSer:AuthServiceService){

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f9f9f9';
 }
 ngOnInit(): void{

 }
 login(){
  this.registerSer.loginUser(this.user).subscribe(a=>
    {
      console.log(a.token)
      localStorage.setItem('token',a.token)
    })
  //console.log(this.user1);
}
}
