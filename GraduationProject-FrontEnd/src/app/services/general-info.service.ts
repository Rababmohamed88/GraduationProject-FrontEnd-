import { GeneralWebInfo } from './../_models/general-web-info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  constructor(private http: HttpClient) { }

  getGeneralInfo(){
    return this.http.get<GeneralWebInfo>('https://localhost:44301/api/GeneralInfo/GeneralInfo');
  }
}
