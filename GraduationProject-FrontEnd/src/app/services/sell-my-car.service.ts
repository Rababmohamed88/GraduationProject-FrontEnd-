import { ServerResponse } from './../_models/server-response';
import { Injectable } from '@angular/core';
import { SellData } from './../_models/sell-data';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SellMyCarService {

  constructor(private http: HttpClient) { }

  addSellData(sData: SellData, carDetailsId:number) {
    return this.http.post<ServerResponse>('https://localhost:44301/api/sell/addselling/'+carDetailsId, sData);
  }
}
