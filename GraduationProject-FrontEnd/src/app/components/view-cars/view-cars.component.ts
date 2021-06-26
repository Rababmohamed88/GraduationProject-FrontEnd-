import { ActivatedRoute, Router } from '@angular/router';
import { CarSearchResult } from './../../_models/car-search-result';
import { ViewCarsService } from './../../services/view-cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css'],
})
export class ViewCarsComponent implements OnInit {
  cars: CarSearchResult[] = [];
  navigator: number;

  constructor(
    private viewServ: ViewCarsService,
    private ac: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.readParams();
    this.cars = await this.viewServ.getInfoForView(this.navigator).toPromise();
  }

  async readParams() {
    this.ac.queryParams.subscribe((a) => {
      if (a.classification == 'rent') {
        this.navigator = 1;
      } else if (a.classification == 'buy') {
        this.navigator = 0;
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
