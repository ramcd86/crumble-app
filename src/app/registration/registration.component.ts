import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCore} from '../_services/http/HttpServiceCore.service';
// Interfaces
import {IUserLogin} from '../_interfaces/IUserLogin';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IDataBaseIteration} from '../_interfaces/IDataBaseIteration';
// States
import {IUserState} from '../_store/IUserState.store';
import {IUserStore} from '../_store/IUserStore.store';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {

  public newUserLogin: IUserLogin;
  public newUserDetails: IUserDetails;
  public newUserDietData: IUserDietData;

  public switchTemp = false;
  public crumb3Toggle = false;
  public crumb4Toggle = false;
  public crumb5Toggle = false;

  public dbState: any;
  public validDetails = true;

  public userLoginListId = 0;
  public userEmail: FormControl = new FormControl(null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
  public password1: FormControl = new FormControl(null, [Validators.required]);
  public password2: FormControl = new FormControl(null, [Validators.required]);
  public dataId: number;

// EMAIL REQUIRED FOR OBJECT, TO BE ACQUIRED FROM USER SUBMITTED EMAIL.
  public userDetailsListId = 0;
  public firstName: FormControl = new FormControl(null, [Validators.required]);
  public lastName: FormControl = new FormControl(null, [Validators.required]);
  public userName: FormControl = new FormControl(null, [Validators.required]);
  public startingWeight: FormControl = new FormControl(null, [Validators.required, Validators.max(999)]);
  public height: FormControl = new FormControl(null, [Validators.required, Validators.max(999)]);
  public age: FormControl = new FormControl(null, [Validators.required, Validators.max(120)]);


  public userDietDataListId = 0;
  public bigCrumbCustom = true;
  public bigCrumbCustomType: FormControl = new FormControl(null, [Validators.required]);
  public bigCrumbCutomMaxValue: FormControl = new FormControl(null, [Validators.required, Validators.max(99999)]);
  public bigCrumbUserSetValue = 0;
  public bugCrumbDefault = 0;
  public bigCrumbHistory = [];

  public littleCrumb1Custom = true;
  public littleCrumb1CustomType: FormControl = new FormControl(null, [Validators.required]);
  public littleCrumb1CutomMaxValue: FormControl = new FormControl(null, [Validators.required, Validators.max(99999)]);
  public littleCrumb1UserSetValue = 0;
  public littleCrumb1Default = 0;
  public littleCrumb1History = [];

  public littleCrumb2Custom = true;
  public littleCrumb2CustomType: FormControl = new FormControl(null,[Validators.required]);
  public littleCrumb2CutomMaxValue: FormControl = new FormControl(null, [Validators.required, Validators.max(99999)]);
  public littleCrumb2UserSetValue = 0;
  public littleCrumb2Default = 0;
  public littleCrumb2History = [];

  public littleCrumb3Custom = false;
  public littleCrumb3CustomType: FormControl = new FormControl('Points');
  public littleCrumb3CutomMaxValue: FormControl = new FormControl(0, [Validators.max(99999)]);
  public littleCrumb3UserSetValue = 0;
  public littleCrumb3Default = 0;
  public littleCrumb3History = [];

  public littleCrumb4Custom = false;
  public littleCrumb4CustomType: FormControl = new FormControl('Points');
  public littleCrumb4CutomMaxValue: FormControl = new FormControl(0, [Validators.max(99999)]);
  public littleCrumb4UserSetValue = 0;
  public littleCrumb4Default = 0;
  public littleCrumb4History = [];

  public littleCrumb5Custom = false;
  public littleCrumb5CustomType: FormControl = new FormControl('Points');
  public littleCrumb5CutomMaxValue: FormControl = new FormControl(0, [Validators.max(99999)]);
  public littleCrumb5UserSetValue = 0;
  public littleCrumb5Default = 0;
  public littleCrumb5History = [];


  constructor(
    private http: HttpServiceCore
  ) {
  }

  ngOnInit() {
    this.http.getDatabaseState().subscribe(
      (res: IDataBaseIteration) => {
        console.log('Initial DB state: ', res.dbState);
        this.dbState = res.dbState + 1;
        console.log('New DB State: ', this.dbState);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public toggleSwitchTemplate() {
    this.switchTemp = !this.switchTemp;
    // window.scrollTo(0, 0);
    document.getElementById('regModal').scrollTop = 0;
  }
  // public crumb3Toggle = false;
  //   // public crumb4Toggle = false;
  //   // public crumb5Toggle = false;
  public toggleCrumb3() {
    this.crumb3Toggle = !this.crumb3Toggle;
    this.littleCrumb3Custom = !this.littleCrumb3Custom;
  }
  public toggleCrumb4() {
    this.crumb4Toggle = !this.crumb4Toggle;
    this.littleCrumb4Custom = !this.littleCrumb4Custom;
  }
  public toggleCrumb5() {
    this.crumb5Toggle = !this.crumb5Toggle;
    this.littleCrumb5Custom = !this.littleCrumb5Custom;
  }

  public logger() {
    console.log(this.userEmail.value);
  }

}
