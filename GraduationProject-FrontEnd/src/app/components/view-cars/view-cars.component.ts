import { ViewCarsService } from './../../services/view-cars.service';
import { ViewCars } from './../../_models/view-cars';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent implements OnInit {

  viewPage: ViewCars[] = [];

  constructor(public viewServ: ViewCarsService) { }

  ngOnInit(): void {
    this.viewServ.getInfoForView().subscribe((a) => {
      this.viewPage = a;
    });
  }

}
