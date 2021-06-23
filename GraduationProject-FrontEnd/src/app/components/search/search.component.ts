import { SearchFilters } from './../../_models/search-filters';
import { CarSearchResult } from './../../_models/car-search-result';
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
  models: Model[] = [];
  classes: Class[] = [];
  years: Year[] = [];
  types: Type[] = [];
  cars: CarSearchResult[];
  filters: SearchFilters = new SearchFilters(0, 0, 0, 0, 0, 'All');

  constructor(private searchServ: SearchService) {}

  ngOnInit(): void {
    this.intializeSelects();
  }

  brandSelectChanged(brandId: number) {
    console.log(brandId);
    this.filters.brand = brandId;
    console.log(this.filters);
    this.changeAfterBrand();
  }

  yearSelectChanged(year: string) {
    this.filters.year = year;
    this.searchServ
      .getAllModelsInBrand(this.filters.brand, year)
      .subscribe((a) => {
        this.models = a;
      });
    this.searchServ
      .getTypesInBrand(
        this.filters.brand,
        this.filters.year,
        this.filters.model
      )
      .subscribe((a) => {
        this.types = a;
      });
  }

  modelSelectChanged(modelId: number) {
    this.filters.model = modelId;
    this.searchServ
      .getTypesInBrand(
        this.filters.brand,
        this.filters.year,
        this.filters.model
      )
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
    this.searchServ.getYearsInBrand(this.filters.brand).subscribe((a) => {
      this.years = a;
    });

    this.searchServ
      .getAllModelsInBrand(this.filters.brand, 'All')
      .subscribe((a) => {
        this.models = a;
      });

    this.searchServ
      .getTypesInBrand(
        this.filters.brand,
        this.filters.year,
        this.filters.model
      )
      .subscribe((a) => {
        this.types = a;
      });
  }

  sendFilters() {
    this.searchServ.search(this.filters).subscribe((a) => {
      console.log(a);
      this.cars = a;
    });
  }
}
