import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../_models/registration';
import { Login } from '../_models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _registerUrl="https://localhost:44301/api/User/Register"
  constructor(private http:HttpClient) { }

  registerUser(user:Registration){
   return this.http.post<any>("https://localhost:44301/api/User/Register",user)
  }
  loginUser(user:Login){
    return this.http.post<any>("https://localhost:44301/api/User/login",user)
   }
}
