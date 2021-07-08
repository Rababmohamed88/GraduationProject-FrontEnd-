import { CarDetails } from './../../_models/car-details';
import { GetCarDetailsService } from './../../services/car-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rentmycar',
  templateUrl: './rentmycar.component.html',
  styleUrls: ['./rentmycar.component.scss'],
})
export class RentmycarComponent implements OnInit {
  title = 'rent';
  isLinear = true;
  safetyAndSecurityGroup: FormGroup;
  performanceGroup: FormGroup;
  interiorGroup: FormGroup;
  exteriorGroup: FormGroup;
  multimediaGroup: FormGroup;
  dimensionsGroup: FormGroup;
  carDetailsId: number;
  details: CarDetails = new CarDetails();
  operation: string;

  constructor(
    private _formBuilder: FormBuilder,
    private ac: ActivatedRoute,
    private detailsServ: GetCarDetailsService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.settingStepper();
    await this.readParams();
    await this.getOriginalData();
  }

  async readParams() {
    await this.ac.queryParams.subscribe((a) => {
      this.carDetailsId = a.id;
      this.operation = a.oper;
    });
  }

  async getOriginalData() {
    this.details = await this.detailsServ
      .getOriginalCarDetails(this.carDetailsId)
      .toPromise();
    console.log(this.details);
  }

  async submit() {
    let a = await this.detailsServ
      .saveCarRentDetailsDb(this.carDetailsId, this.details)
      .toPromise();
    if (a.isSuccess) {
      if (this.operation == 'rent') {
        this.router.navigate(['/profile'], {
          queryParams: { email: localStorage.getItem('email') },
        });
      } else if (this.operation == 'sell') {
        this.router.navigate(['/sell-my-car'], {
          queryParams: { id: this.carDetailsId },
        });
      } else {
        alert('logout :) ');
      }
    } else {
      alert(a.message);
    }
  }
  settingStepper() {
    this.safetyAndSecurityGroup = this._formBuilder.group({
      electric: Boolean,
      PowerAssisted: [''],
      Active: Boolean,
      Traction: Boolean,
      TPMS: Boolean,
      ABS: Boolean,
      ESP: Boolean,
      Airbags: [''],
      HLA: Boolean,
      Speed: Boolean,
      StartStop: Boolean,
      Immobilizer: Boolean,
      ISOFIX: Boolean,
      EBD: Boolean,
      CruiseControl: Boolean,
    });
    this.performanceGroup = this._formBuilder.group({
      name: [''],
      Cylinders: [''],
      Maximumtorque: [''],
      FuelConsumption: [''],
      FuelType: [''],
      Maximumpower: [''],
      Acceleration: [''],
      MaxSpeed: [''],
      FuelTank: [''],
      GearShift: [''],
    });
    this.interiorGroup = this._formBuilder.group({
      Multisteeringwheel: Boolean,
      Paddleshifters: Boolean,
      LeatherSteering: Boolean,
      Variableheated: Boolean,
      PowerTailgate: Boolean,
      AmbientLighting: [''],
      NumberofSeats: Boolean,
      KeylessStartStop: Boolean,
      Rearparkingsensors: Boolean,
      RearViewCamera: Boolean,
      PassengerSeat: [''],
      CenterLock: Boolean,
      DashboardDigital: Boolean,
      DriveModeSelect: [''],

      Ac: Boolean,
      LeatherTransmission: Boolean,
      BackHolder: Boolean,
      KeylessEntry: Boolean,
      mirror: Boolean,
      AirCondition: [''],
      backseats: Boolean,
      Frontparkingsensors: Boolean,
      FrontCamera: Boolean,
      DriverSeat: [''],
      LeatherSeats: Boolean,
      ElectronicWindow: Boolean,
    });
    this.exteriorGroup = this._formBuilder.group({
      RainSensor: Boolean,
      Foglamps: Boolean,
      Rearamps: [''],
      Autolighting: Boolean,
      Wheelswithtire: [''],
      PanoramaRoof: Boolean,
      AutoFoldingMirrors: Boolean,
      Privacyglass: Boolean,
      HeadlampsLED: [''],
      LEDDaytime: Boolean,
      LightSensors: Boolean,
      SunRoof: Boolean,
      Powermirrors: Boolean,
      TrimSize: [''],
    });
    this.multimediaGroup = this._formBuilder.group({
      AUX: Boolean,
      USB: Boolean,
      MultifunctionSteeringWheel: Boolean,
      Touchscreen: [''],
      WirelessCharger: Boolean,
      CDPlayer: Boolean,

      Bluetooth: Boolean,
      HeadUpDisplay: Boolean,
      SmartphoneLink: [''],
      NavigationSystem: Boolean,
      Speakers: Boolean,
    });
    this.dimensionsGroup = this._formBuilder.group({
      LuggageBoxCapacity: [''],
      Clearance: Boolean,
      Width: [''],
      Wheelbase: [''],
      Length: [''],
      Height: [''],
    });
  }
}
