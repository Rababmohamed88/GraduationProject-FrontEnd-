import { Injectable } from '@angular/core';
import { SellData } from './../_models/sell-data';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SellMyCarService {

  constructor(private http: HttpClient) { }

  addSellData(sData: SellData) {
    return this.http.post<SellData>('https://localhost:44301/api/cars/', sData);
  }
}
