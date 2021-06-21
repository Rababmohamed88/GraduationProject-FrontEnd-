import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetails } from '../_models/car-details';

@Injectable({
  providedIn: 'root',
})
export class GetCarDetailsService {
  constructor(private http: HttpClient) {}

  getCarDetails(carDetailsId: number) {
    return this.http.get<CarDetails>('https://localhost:44301/api/cars/'+carDetailsId)
  }
}
