import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../../_models/car-details';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cd: CarDetails = new CarDetails();

  ngOnInit(): void {
  }

}
