import {Component, OnInit} from '@angular/core';
import {IUserState} from '../_store/IUserState.store';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCoreService} from '../_services/http/HttpServiceCore.service';
import {IUserLogin} from './../_interfaces/IUserLogin';
import {IUserDetails} from './../_interfaces/IUserDetails';
import {IUserStore} from '../_store/IUserStore.store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  // providers: [
  //   {
  //     provide: NG_VALIDATOR,
  //     userValue: emailValidation,
  //     multi: true
  //   }
  // ]
})
export class RegistrationComponent implements OnInit {

  public validDetails = true;


  // User Logjn Details Template
//   id: number;
//   email: string;
//   password: string;
//   data_Id: number;
  public userEmail: FormControl = new FormControl('example@example.com', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
  public password: FormControl = new FormControl(null, [Validators.required]);
  public data_id: number;

  // User Details Template
//   email?: string;
//   firstName?: string;
//   lastName?: string;
//   userName?: string;
//   startingWeight?: string;
//   currentWeight?: string;
//   height?: string;
//   age?: number;

  // EMAIL REQUIRED FOR OBJECT, TO BE ACQUIRED FROM USER SUBMITTED EMAIL.
  public firstName: FormControl = new FormControl(null, [Validators.required]);
  public lastName: FormControl = new FormControl(null, [Validators.required]);
  public userName: FormControl = new FormControl(null, [Validators.required]);
  public startingWeight: FormControl = new FormControl(null, [Validators.required]);
  public height: FormControl = new FormControl(null, [Validators.required]);
  public age: FormControl = new FormControl(null, [Validators.required]);


  // User diet data template
  // "bigCrumbCustom": true,
  // "bigCrumbDefault": 0,
  // "bigCrumbCustomType": "Syns",
  // "bigCrumbCustomMaxValue": 25,
  // "bigCrumbUserSetValue": 0,
  public bigCrumbName: FormControl = new FormControl(null, [Validators.required]);
  public bigCrumbMaxValue: FormControl = new FormControl(null, [Validators.required]);

  // "littleCrumb1Custom": true,
  // "littleCrumb1Default": 0,
  // "littleCrumb1CustomType": "HEXMilk",
  // "littleCrumb1CustomMaxValue": 5,
  // "littleCrumb1UserSetValue": 0,
  // "littleCrumb2Custom": true,
  // "littleCrumb2Default": 0,
  // "littleCrumb2CustomType": "HEXBread",
  // "littleCrumb2CustomMaxValue": 2,
  // "littleCrumb2UserSetValue": 0,
  // "littleCrumb3Custom": false,
  // "littleCrumb3Default": 0,
  // "littleCrumb3CustomType": "Points",
  // "littleCrumb3CustomMaxValue": 0,
  // "littleCrumb3UserSetValue": 0,
  // "littleCrumb4Custom": false,
  // "littleCrumb4Default": 0,
  // "littleCrumb4CustomType": "Points",
  // "littleCrumb4CustomMaxValue": 0,
  // "littleCrumb4UserSetValue": 0,
  // "littleCrumb5Custom": false,
  // "littleCrumb5Default": 0,
  // "littleCrumb5CustomType": "Points",
  // "littleCrumb5CustomMaxValue": 0,
  // "littleCrumb5UserSetValue": 0


  constructor() {
  }

  ngOnInit() {
  }

  public logger() {
    console.log(this.userEmail.value);
  }

}
