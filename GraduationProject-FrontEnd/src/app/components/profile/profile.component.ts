import { ProfileService } from './../../services/profile.service';
import { ProfileInfo } from '../../_models/Profile/user-info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnCar } from '../../_models/Profile/own-car';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  prof: ProfileInfo = new ProfileInfo();
  cars: OwnCar[] = [];

  constructor(
    private ac: ActivatedRoute,
    private profileServ: ProfileService
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.getUserCars();
  }

  getUserData() {
    this.profileServ.getUserInfo().subscribe((a) => {
      this.prof = a;
    });
  }

  getUserCars() {
    this.profileServ.getUserCars().subscribe((a) => {
      this.cars = a;
    });
  }

  delete(userCarId: number) {
    this.profileServ.deleteUserCar(userCarId).subscribe((a) => {
      if (a.isSuccess) {
        this.getUserCars();
      } else {
        alert(a.message);
      }
    });
  }
}
