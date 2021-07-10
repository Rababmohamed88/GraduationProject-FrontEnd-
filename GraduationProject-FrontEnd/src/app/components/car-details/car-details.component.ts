import { SellData } from './../../_models/sell-data';
import { GeneralInfoService } from './../../services/general-info.service';
import { GeneralWebInfo } from './../../_models/general-web-info';
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
  carSellingData: SellData = new SellData();
  info: GeneralWebInfo = new GeneralWebInfo();
  detailsid: number;
  sentDetailsId: number;
  userData: boolean;

  constructor(
    private detailsServ: GetCarDetailsService,
    private ac: ActivatedRoute,
    private generalServ: GeneralInfoService
  ) {}

  async ngOnInit() {
    await this.getGeneralInfo();
    await this.ac.queryParams.subscribe((p) => {
      this.detailsid = p.id;
      if (p.user == 'from') this.userData = true;

      if (this.detailsid > this.info.carsNo) {
        this.getCarInfo(false);
      } else {
        this.sentDetailsId = this.detailsid;
        this.getCarInfo(true);
      }
    });
  }

  async getCarInfo(newCar: boolean) {
    if (newCar) {
      this.cd = await this.detailsServ
        .getCarDetails(this.detailsid)
        .toPromise();
    } else {
      if (this.userData) {
        this.cd = await this.detailsServ
          .getCarDetails(this.detailsid)
          .toPromise();
        this.carSellingData = await this.detailsServ
          .getSellingData(this.detailsid)
          .toPromise();
        console.log(this.carSellingData);
      } else {
        this.cd = await this.detailsServ
          .getOriginalCarDetails(this.detailsid)
          .toPromise();
      }

      this.sentDetailsId = this.cd.carDetailsId;
    }
    await this.settingData(this.cd);
    if (this.carSellingData != null)
      await this.settingData(this.carSellingData);
  }

  async getGeneralInfo() {
    this.info = await this.generalServ.getGeneralInfo().toPromise();
  }

  async settingData(obj) {
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
    return obj;
  }
}
