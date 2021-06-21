import { ChooseCar } from './../../_models/chooseCar/choose-car';
import { Class } from './../../_models/chooseCar/class';
import { Model } from './../../_models/chooseCar/model';
import { Brand } from './../../_models/chooseCar/brand';
import { Component, OnInit } from '@angular/core';
import { ChooseCarService } from './../../services/choose-car.service';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css'],
})
export class ChooseCarComponent implements OnInit {
  brands: Brand[] = [];
  models: Model[] = [];
  classes: Class[] = [];
  carCard: ChooseCar;

  modelId: number;
  classId: number;

  constructor(private chooseServ: ChooseCarService) {}

  ngOnInit(): void {
    this.chooseServ.getAllBrands().subscribe((a) => {
      this.brands = a;
    });
  }

  brandSelectChanged(brandId: number) {
    this.chooseServ.getAllModels(brandId).subscribe((a) => {
      this.models = a;
    });
  }

  modelSelectChanged(modelId: number) {
    this.modelId = modelId;
    this.chooseServ.getAllClasses(modelId).subscribe((a) => {
      this.classes = a;
    });
  }

  classSelectChanged(classId: number) {
    this.classId = classId;
  }

  searchClicked() {
    this.chooseServ
      .getCarDataCard(this.modelId, this.classId)
      .subscribe((a) => {
        this.carCard = a;
      });
  }
}
