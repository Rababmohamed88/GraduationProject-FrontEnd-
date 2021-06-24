import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileInfo } from '../_models/Profile/user-info';
import { OwnCar } from '../_models/Profile/own-car';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get<ProfileInfo>('https://localhost:44301/api/user/profile');
  }

  getUserCars(){
    return this.http.get<OwnCar[]>('https://localhost:44301/api/user/UserCars');
  }


}
