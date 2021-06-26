import { ServerResponse } from './../../_models/server-response';
import { SellMyCarService } from './../../services/sell-my-car.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SellData } from './../../_models/sell-data';

@Component({
  selector: 'app-sell-my-car',
  templateUrl: './sell-my-car.component.html',
  styleUrls: ['./sell-my-car.component.css'],
})
export class SellMyCarComponent implements OnInit {
  selldata: SellData = new SellData();
  carDetailsId:number;
  response:ServerResponse = new ServerResponse();

  constructor(
    private sellSev: SellMyCarService,
    private router: Router,
    private ac: ActivatedRoute
  ) {}

  save() {
    this.sellSev.addSellData(this.selldata, this.carDetailsId).subscribe((a)=>{
      this.response = a;
      if(this.response.isSuccess){
        this.router.navigate(['/profile']);
      }else{
        alert(this.response.message);
      }

    });
  }

  ngOnInit(): void {
    this.ac.queryParams.subscribe((a)=>{
      this.carDetailsId = a.id;
    });
  }
}
