import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _Url="https://localhost:44301/api/"

  constructor(private http:HttpClient) { }

   getModels(brand:number){
    return this.http.get<any>(this._Url+"Search/SearchByBrand?brand="+brand)
   }

   searchByBrandModel(brand:number,model:number){
    return this.http.get<any>(this._Url+"Search/SearchByBrandModel?brand="+brand+"&model="+model)
   } 
   searchByAll(brand:number,model:number,body:number){
    return this.http.get<any>(this._Url+"Search/SearchByAll?brand="+brand+"&model="+model+"&body="+body)
   } 
   searchByBody(body:number){
    return this.http.get<any>(this._Url+"Search/SearchByBody?body="+body)
   } 
   getAllBrands(){
    return this.http.get<any>(this._Url+"Brand/All")
   } 
}
