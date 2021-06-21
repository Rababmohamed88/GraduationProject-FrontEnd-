import { Injectable } from '@angular/core';
import { Home } from './../_models/home';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getDetailsForHome() {
    return this.http.get<Home[]>('https://localhost:44301/api/home/homecars');
  }
}
