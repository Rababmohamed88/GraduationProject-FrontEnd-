import { Year } from './../_models/chooseCar/year';
import { ChooseCar } from './../_models/chooseCar/choose-car';
import { Class } from './../_models/chooseCar/class';
import { Model } from './../_models/chooseCar/model';
import { Brand } from './../_models/chooseCar/brand';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChooseCarService {
  constructor(private http: HttpClient) {}

  getAllBrands() {
    return this.http.get<Brand[]>('https://localhost:44301/api/brand/all');
  }
  getAllModels(brandId: number, year: string) {
    return this.http.get<Model[]>(
      'https://localhost:44301/api/model/getinbrand?id=' +
        brandId +
        '&year=' +
        year
    );
  }
  getAllClasses(modelId: number) {
    return this.http.get<Class[]>(
      'https://localhost:44301/api/class/classesinmodel/' + modelId
    );
  }

  getYearsInBrand(brandId: number) {
    return this.http.get<Year[]>('https://localhost:44301/api/year/' + brandId);
  }

  getCarDataCard(modelId: number, classId: number) {
    return this.http.get<ChooseCar>(
      'https://localhost:44301/api/modelclass/getinmodel?modelId=' +
        modelId +
        '&classId=' +
        classId
    );
  }


}
