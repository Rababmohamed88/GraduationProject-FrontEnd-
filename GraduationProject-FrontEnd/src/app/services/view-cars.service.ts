import { ViewCars } from './../_models/view-cars';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewCarsService {

  constructor(private http: HttpClient) { }

  getInfoForView() {
    return this.http.get<ViewCars[]>('https://localhost:44301/api/');
  }
}
