import { Year } from './../../_models/chooseCar/year';
import { SearchService } from 'src/app/services/search.service';
import { Type } from './../../_models/type';
import { ChooseCarService } from './../../services/choose-car.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/_models/chooseCar/brand';

@Component({
  selector: 'app-usedcar',
  templateUrl: './usedcar.component.html',
  styleUrls: ['./usedcar.component.css'],
})
export class UsedcarComponent implements OnInit {
  brands: Brand[] = [];
  types: Type[] = [];
  years: Year[] = [];

  constructor(
    private router: Router,
    private chooseServ: ChooseCarService,
    private searchServ: SearchService
  ) {}

  ngOnInit(): void {
    this.getAllBrands();
    this.getTypes();
    this.getAllYears();
  }

  btnPriceClick(fromPrice: number, toPrice: number) {
    this.router.navigate(['search'], {
      queryParams: { minprice: fromPrice, maxprice: toPrice },
    });
  }

  getAllBrands() {
    this.chooseServ.getAllBrands().subscribe((a) => {
      this.brands = a;
    });
  }

  getTypes() {
    this.searchServ.getAllTypesForPre().subscribe((a) => {
      this.types = a;
    });
  }

  getAllYears() {
    this.searchServ.getAllYears().subscribe((a) => {
      this.years = a;
    });
  }

  btnYearClicked(year: number) {
    this.router.navigate(['search'], {
      queryParams: { year: year },
    });
  }
}
