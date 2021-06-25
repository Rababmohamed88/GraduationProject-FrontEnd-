import { GeneralWebInfo } from './../../_models/general-web-info';
import { GeneralInfoService } from './../../services/general-info.service';
import { Home } from '../../_models/home';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeDetails: Home[] = [];
  info: GeneralWebInfo = new GeneralWebInfo();
  constructor(
    private homeServ: HomeService,
    private generalServ: GeneralInfoService
  ) {}

  ngOnInit(): void {
    this.getHomeCars();
    this.getGeneralInfo();
  }

  getHomeCars() {
    this.homeServ.getDetailsForHome().subscribe((a) => {
      this.homeDetails = a;
    });
  }
  getGeneralInfo() {
    this.generalServ.getGeneralInfo().subscribe((a) => {
      this.info = a;
    });
  }
}
