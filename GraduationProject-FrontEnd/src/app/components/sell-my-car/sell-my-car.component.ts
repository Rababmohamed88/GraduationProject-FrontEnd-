import { SellMyCarService } from './../../services/sell-my-car.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellData } from './../../_models/sell-data';

@Component({
  selector: 'app-sell-my-car',
  templateUrl: './sell-my-car.component.html',
  styleUrls: ['./sell-my-car.component.css']
})
export class SellMyCarComponent implements OnInit {

  selldata: SellData = new SellData();

  constructor(
    private sellSev: SellMyCarService,
    private router: Router
    ) { }

  Save(){
    this.sellSev.addSellData(this.selldata).subscribe(a=>{
      this.router.navigateByUrl("/profile");
    })
  }

  ngOnInit(): void {
  }

}
