import { Type } from './../../_models/type';
import { Year } from './../../_models/chooseCar/year';
import { Class } from './../../_models/chooseCar/class';
import { Model } from './../../_models/chooseCar/model';
import { Brand } from './../../_models/chooseCar/brand';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  brands: Brand[] = [];
  brandId: number;

  models: Model[] = [];
  modelId: number;

  classes: Class[] = [];

  years: Year[] = [];
  year: string;

  types: Type[] = [];

  constructor(private searchServ: SearchService) {}

  ngOnInit(): void {
    this.intializeSelects();
  }

  brandSelectChanged(brandId: number) {
    this.brandId = brandId;
    this.changeAfterBrand();
  }

  yearSelectChanged(year: string) {
    this.year = year;
    this.searchServ.getAllModelsInBrand(this.brandId, year).subscribe((a) => {
      this.models = a;
    });
    this.searchServ
      .getTypesInBrand(this.brandId, this.year, this.modelId)
      .subscribe((a) => {
        this.types = a;
      });
  }

  modelSelectChanged(modelId: number) {
    this.modelId = modelId;
    this.searchServ
      .getTypesInBrand(this.brandId, this.year, this.modelId)
      .subscribe((a) => {
        this.types = a;
      });
  }

  intializeSelects() {
    this.searchServ.getAllBrand().subscribe((a) => {
      this.brands = a;
    });

    this.searchServ.getAllModels().subscribe((a) => {
      this.models = a;
    });

    this.searchServ.getAllTypes().subscribe((a) => {
      this.types = a;
    });

    this.searchServ.getAllYears().subscribe((a) => {
      this.years = a;
    });
  }

  changeAfterBrand() {
    this.searchServ.getYearsInBrand(this.brandId).subscribe((a) => {
      this.years = a;
    });

    this.searchServ.getAllModelsInBrand(this.brandId, 'All').subscribe((a) => {
      this.models = a;
    });

    this.searchServ
      .getTypesInBrand(this.brandId, this.year, this.modelId)
      .subscribe((a) => {
        this.types = a;
      });
  }
}
