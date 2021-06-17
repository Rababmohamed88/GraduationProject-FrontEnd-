import { Home } from '../../_models/home';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeDetails: Home[] = [];
  constructor(
    public h: HomeService,
    private ac: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.ac.params.subscribe((p) => {
      this.h.getDetailsForHome(p.id).subscribe((a) => {
        this.homeDetails = a;
      });
    });
  }
}
