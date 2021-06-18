import { GetCarDetailsService } from './../../services/car-details.service';
import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../../_models/car-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  cd: CarDetails = new CarDetails();

  constructor(
    private detailsServ: GetCarDetailsService,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ac.params.subscribe((p) => {
      this.detailsServ.getCarDetails(p.id).subscribe((a) => {
        this.cd = this.settingData(a);
      });
    });
  }

  settingData(obj: CarDetails) {
    Object.keys(obj).forEach(function (key) {
      if (typeof obj[key] === 'boolean') {
        if (obj[key]) {
          obj[key] = '<i class="fa fa-check"></i>';
        } else {
          obj[key] = '<i class="fa fa-times"></i>';
        }
      }

      if (typeof obj[key] === 'number') {
        if (obj[key] == -1) {
          obj[key] = '<i class="fa fa-times"></i>';
        }
      }
    });

    console.log(obj);
    return obj;
  }
}
