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
  constructor(public homeServ: HomeService) {}

  ngOnInit(): void {
    this.homeServ.getDetailsForHome().subscribe((a) => {
      this.homeDetails = a;
    });
  }
}
