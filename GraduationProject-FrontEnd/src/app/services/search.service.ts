import { Class } from './../_models/chooseCar/class';
import { Model } from './../_models/chooseCar/model';
import { Type } from './../_models/type';
import { Year } from './../_models/chooseCar/year';
import { Brand } from './../_models/chooseCar/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getAllBrand() {
    return this.http.get<Brand[]>('https://localhost:44301/api/brand/all');
  }

  getAllModels() {
    return this.http.get<Model[]>(
      'https://localhost:44301/api/Model/AllModels'
    );
  }

  getAllYears() {
    return this.http.get<Year[]>('https://localhost:44301/api/year/all');
  }

  getAllTypes() {
    return this.http.get<Type[]>('https://localhost:44301/api/Type/All');
  }

  getAllModelsInBrand(brandId: number, year: string) {
    return this.http.get<Model[]>(
      'https://localhost:44301/api/model/getinbrand?id=' +
        brandId +
        '&year=' +
        year
    );
  }

  getAllClassesInModel(modelId: number) {
    return this.http.get<Class[]>(
      'https://localhost:44301/api/class/classesinmodel/' + modelId
    );
  }

  getYearsInBrand(brandId: number) {
    return this.http.get<Year[]>('https://localhost:44301/api/year/' + brandId);
  }

  getTypesInBrand(brandId: number, year: string, modelId: number) {
    if(typeof(year) == 'undefined'){
      year ="All";
    }

    if(typeof(modelId) == 'undefined'){
      modelId = 0;
    }

    return this.http.get<Type[]>(
      'https://localhost:44301/api/Type/bybrand?brandId=' +
        brandId +
        '&year=' +
        year +
        '&modelId=' +
        modelId
    );
  }
}
