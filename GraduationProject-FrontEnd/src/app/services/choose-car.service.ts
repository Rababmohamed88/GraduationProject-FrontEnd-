import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChooseCar } from '../_models/choose-car';

@Injectable({
  providedIn: 'root'
})
export class ChooseCarService {

  constructor(private http:HttpClient) { }

  getAllBrands() {
    return this.http.get<ChooseCar[]>('https://localhost:44301/api/cars/')
  }
  getAllModels() {
    return this.http.get<ChooseCar[]>('https://localhost:44301/api/cars/')
  }
  getAllClasses() {
    return this.http.get<ChooseCar[]>('https://localhost:44301/api/cars/')
  }
}
