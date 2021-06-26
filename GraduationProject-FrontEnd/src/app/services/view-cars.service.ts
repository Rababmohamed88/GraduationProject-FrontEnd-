import { CarSearchResult } from './../_models/car-search-result';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViewCarsService {
  constructor(private http: HttpClient) {}

  getInfoForView(rent: number) {
    return this.http.get<CarSearchResult[]>(
      'https://localhost:44301/api/cars/getcars?rent=' + rent
    );
  }
}
