import { Type } from './../../_models/type';
import { SearchService } from 'src/app/services/search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcar',
  templateUrl: './allcar.component.html',
  styleUrls: ['./allcar.component.css'],
})
export class AllcarComponent implements OnInit {
  types: Type[] = [];

  constructor(private router: Router, private searchServ: SearchService) {}

  ngOnInit(): void {
    this.getTypes()
  }

  search(minPrice: number, maxPrice: number) {
    this.router.navigate(['search'], {
      queryParams: { minprice: minPrice, maxprice: maxPrice },
    });
  }

  getTypes() {
    this.searchServ.getAllTypesForPre().subscribe((a) => {
      this.types = a;
    });
  }

  active = 1;
}
