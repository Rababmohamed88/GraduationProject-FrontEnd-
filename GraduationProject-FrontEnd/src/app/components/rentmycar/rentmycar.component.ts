import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-rentmycar',
  templateUrl: './rentmycar.component.html',
  styleUrls: ['./rentmycar.component.scss']
})
export class RentmycarComponent implements OnInit {
 
  title = 'rent'; 
  isLinear = true;
  safetyAndSecurityGroup: FormGroup;
  performanceGroup:FormGroup;
  interiorGroup:FormGroup;
  exteriorGroup:FormGroup;
  multimediaGroup:FormGroup;
  dimensionsGroup:FormGroup;

  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.safetyAndSecurityGroup = this._formBuilder.group({
      electric:Boolean,
      PowerAssisted:[''],
      Active:Boolean,
      Traction :Boolean,
      TPMS:Boolean,
      ABS	:Boolean,
      ESP:Boolean,
      Airbags:[''],
      HLA	:Boolean,
      Speed	:Boolean,
      StartStop :Boolean,
      Immobilizer	:Boolean,
      ISOFIX:Boolean,	
      EBD	:Boolean,
      CruiseControl:Boolean,


    });
    this.performanceGroup = this._formBuilder.group({
      name: ['' ],
      Cylinders	:[''],
      Maximumtorque :[''],
      FuelConsumption :['']	,
      FuelType	:[''],
      Maximumpower:[''],
      Acceleration:[''],
      MaxSpeed:[''],
      FuelTank:[''],
      GearShift:['']
    });
    this.interiorGroup = this._formBuilder.group({
      Multisteeringwheel	:Boolean, 
      Paddleshifters	:Boolean,
      LeatherSteering :Boolean,	
      Variableheated	:Boolean,
      PowerTailgate	:Boolean,
      AmbientLighting	:[''],
      NumberofSeats	:Boolean,
      KeylessStartStop:Boolean,
      Rearparkingsensors :Boolean,
      RearViewCamera	:Boolean,
      PassengerSeat:[''],
      CenterLock	:Boolean,
      DashboardDigital:Boolean,
      DriveModeSelect	:[''],

      Ac:Boolean,
      LeatherTransmission:Boolean,	
      BackHolder:Boolean,	
      KeylessEntry:Boolean,	
      mirror	:Boolean,
      AirCondition:[''],
      backseats	:Boolean,
      Frontparkingsensors	:Boolean,
      FrontCamera	:Boolean,
      DriverSeat:[''],
      LeatherSeats	:Boolean,
      ElectronicWindow:Boolean

    });
    this.exteriorGroup = this._formBuilder.group({
      RainSensor:Boolean,	
      Foglamps:Boolean	,
      Rearamps	:[''],
      Autolighting 	:Boolean,
      Wheelswithtire :[''],
      PanoramaRoof	:Boolean,
      AutoFoldingMirrors:Boolean,
      Privacyglass	:Boolean,
      HeadlampsLED:[''],
      LEDDaytime 	:Boolean,
      LightSensors	:Boolean,
      SunRoof	:Boolean,
      Powermirrors:Boolean,	
      TrimSize	:['']

    });
    this.multimediaGroup = this._formBuilder.group({
      AUX	:Boolean,
      USB	:Boolean,
      MultifunctionSteeringWheel	:Boolean,
      Touchscreen	:[''],
      WirelessCharger	:Boolean,
      CDPlayer:Boolean,

      Bluetooth	:Boolean,
      HeadUpDisplay	:Boolean,
      SmartphoneLink :[''],
      NavigationSystem	:Boolean,
      Speakers:Boolean
    });
    this.dimensionsGroup = this._formBuilder.group({
      LuggageBoxCapacity	:[''],
      Clearance	:Boolean,
      Width:[''],
      Wheelbase:[''],
      Length	:[''],
      Height:['']
    });
    
    
    // this.firstFormGroup = this._formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required]
    // });
   
  }
  
  submit(){
  console.log( this.safetyAndSecurityGroup.value.electric);
}


}
