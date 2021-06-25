import { CarDetails } from './../_models/car-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class GetCarDetailsService {
  constructor(private http: HttpClient) {}

  getCarDetails(carDetailsId: number) {
    return this.http.get<CarDetails>(
      'https://localhost:44301/api/cars/' + carDetailsId
    );
  }

  getOriginalCarDetails(carDetailsId: number) {
    return this.http.get<CarDetails>(
      'https://localhost:44301/api/rent/rentinfo/' + carDetailsId
    );
  }

  saveCarRentDetailsDb(carDetilsId:number, carDetails:CarDetails){
    return this.http.put('https://localhost:44301/api/rent/saverent?cardetailsid='+carDetilsId,carDetails );
  }
}
