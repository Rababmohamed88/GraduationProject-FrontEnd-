import { ProfileService } from './../../services/profile.service';
import { ProfileInfo } from '../../_models/Profile/user-info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnCar } from '../../_models/Profile/own-car';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  prof: ProfileInfo = new ProfileInfo();
  owncar: OwnCar = new OwnCar();

  constructor(
    private ac: ActivatedRoute,
    private profileServ: ProfileService
  ) { }

  ngOnInit(): void {
    // this.ac.params.subscribe((p) => {
    //   this.profileServ.getUserInfo(p.id).subscribe((a) => {
    //     this.prof = a;
    //   });
    // });

    this.getUserData();
  }

  getUserData(){
    this.profileServ.getUserInfo().subscribe((a)=>{
      this.prof = a;
    })
  }

}
