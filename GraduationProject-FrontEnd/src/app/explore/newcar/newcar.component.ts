import { SearchService } from 'src/app/services/search.service';
import { Type } from './../../_models/type';
import { ChooseCarService } from './../../services/choose-car.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/_models/chooseCar/brand';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.css'],
})
export class NewcarComponent implements OnInit {
  brands: Brand[] = [];
  types: Type[] = [];

  constructor(
    private chooseServ: ChooseCarService,
    private searchSev: SearchService
  ) {}

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllTypes()
  }

  getAllBrands() {
    this.chooseServ.getAllBrands().subscribe((a) => {
      this.brands = a;
    });
  }

  getAllTypes() {
    this.searchSev.getAllTypesForPre().subscribe((a)=>{
      this.types = a;
    })
  }
}
