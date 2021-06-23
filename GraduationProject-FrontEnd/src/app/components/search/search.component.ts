import { SearchFilters } from './../../_models/search-filters';
import { CarSearchResult } from './../../_models/car-search-result';
import { Type } from './../../_models/type';
import { Year } from './../../_models/chooseCar/year';
import { Class } from './../../_models/chooseCar/class';
import { Model } from './../../_models/chooseCar/model';
import { Brand } from './../../_models/chooseCar/brand';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  filters: SearchFilters = new SearchFilters(0, 0, 0, 0, 0, 0);

  constructor(private searchServ: SearchService, private ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.intializeSelects();
    this.readQueryParams();
  }

  readQueryParams() {
    this.ac.queryParams.subscribe((p) => {
      if (p.minprice !== undefined) this.filters.minprice = p.minprice;
      if (p.maxprice !== undefined) this.filters.maxprice = p.maxprice;
      if (p.body !== undefined) this.filters.body = p.body;
      if (p.brand !== undefined) this.filters.brand = p.brand;
      if (p.year !== undefined) this.filters.year = p.year;

      this.sendFilters();
    });
  }

  brandSelectChanged(brandId: number) {
    this.filters.brand = brandId;
    this.changeAfterBrand();
  }

  yearSelectChanged(year: number) {
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
      .getAllModelsInBrand(this.filters.brand, this.filters.year)
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
      this.cars = a;
    });
  }
}
