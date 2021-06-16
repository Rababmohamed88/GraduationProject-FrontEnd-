import { Home } from '../../_models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  c: Home = new Home();

  ngOnInit(): void {
  }

}
