import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Registration } from 'src/app/_models/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit ,AfterViewInit{
user:Registration=new Registration("","","","","","");

  constructor(private elementRef: ElementRef,private registerSer:AuthServiceService){

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f9f9f9';
 }

  ngOnInit(): void {
  }

  register(){
    this.registerSer.registerUser(this.user).subscribe(a=>{console.log(a)})
    //console.log(this.user1);
  }

}
