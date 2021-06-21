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
  getAllModels(brandId: number) {
    return this.http.get<Model[]>(
      'https://localhost:44301/api/model/getinbrand/' + brandId
    );
  }
  getAllClasses(modelId: number) {
    return this.http.get<Class[]>(
      'https://localhost:44301/api/class/classesinmodel/' + modelId
    );
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
