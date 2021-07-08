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
  email: string;
  same: boolean;

  constructor(
    private ac: ActivatedRoute,
    private profileServ: ProfileService
  ) {}

  ngOnInit(): void {
    this.ac.queryParams.subscribe((a) => {
      this.email = a.email;
    });
    this.getUserData();
    this.getUserCars();
    this.isTheSameUser();
  }

  getUserData() {
    this.profileServ.getUserInfo(this.email).subscribe((a) => {
      this.prof = a;
    });
  }

  getUserCars() {
    this.profileServ.getUserCars(this.email).subscribe((a) => {
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

  // isTheSameUser() {
  //   this.profileServ.isSameUser(this.email).subscribe((a) => {
  //     if (a.isSuccess) {
  //       if (a.message == 'same') {
  //         this.same = true;
  //       } else {
  //         this.same = false;
  //       }
  //     }
  //   });
  // }

  async isTheSameUser() {
    let a = await this.profileServ.isSameUser(this.email).toPromise();
    if (a.isSuccess) {
      if (a.message == 'same') {
        this.same = true;
      } else {
        this.same = false;
      }
    }
  }
}
