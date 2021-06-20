import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _Url="https://localhost:44301/api/"

  constructor(private http:HttpClient) { }


  getAll(brand:number=0,model:number=0,body:number=0,minPrice:number=0,maxPrice:number=0,year:number=0){

    return this.http.get<any>(this._Url+"Search/SearchByAll?minprice="+minPrice+"&maxPrice="+maxPrice+"&brand="+brand+"&model="+model+"&body="+body+"&year="+year)
  }
   getModels(brand:number){
    return this.http.get<any>(this._Url+"Search/SearchByBrand?brand="+brand)
   }

  //  searchByBrandModel(brand:number,model:number){
  //   return this.http.get<any>(this._Url+"Search/SearchByBrandModel?brand="+brand+"&model="+model)
  //  } 
  //  searchByAll(brand:number,model:number,body:number){
  //   return this.http.get<any>(this._Url+"Search/SearchByAll?brand="+brand+"&model="+model+"&body="+body)
  //  } 
  //  searchByBody(body:number){
  //   return this.http.get<any>(this._Url+"Search/SearchByBody?body="+body)
  //  } 
   getAllBrands(){
    return this.http.get<any>(this._Url+"Brand/All")
   } 
  //  searchByYear(year:number){
  //   return this.http.get<any>(this._Url+"Search/SearchByYear?year="+year)
  //  } 
  //  searchByprice(price1:number,price2:number){
  //   return this.http.get<any>(this._Url+"Search/SearchByPrice?price1="+price1+"&price2="+price2)
  //  } 
}
