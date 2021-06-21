import { Component, OnInit } from '@angular/core';
import { ChooseCarService } from './../../services/choose-car.service';
import { ChooseCar } from '../../_models/choose-car';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css']
})
export class ChooseCarComponent implements OnInit {

  brands:ChooseCar[] = []
  models:ChooseCar[] = []
  classes:ChooseCar[] = []

  constructor(public chooseServ: ChooseCarService) { }

  ngOnInit(): void {
    this.chooseServ.getAllBrands().subscribe(a => {
      this.brands = a;})

      this.chooseServ.getAllModels().subscribe(a => {
        this.models = a;})
    
      this.chooseServ.getAllClasses().subscribe(a => {
        this.classes = a;})
  }
}
