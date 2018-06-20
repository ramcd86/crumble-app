import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCoreService} from '../_services/http/HttpServiceCore.service';
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

  public dbState: any;
  public validDetails = true;

  public userEmail: FormControl = new FormControl(null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
  public password: FormControl = new FormControl(null, [Validators.required]);
  public data_id: number;

// EMAIL REQUIRED FOR OBJECT, TO BE ACQUIRED FROM USER SUBMITTED EMAIL.
  public firstName: FormControl = new FormControl(null, [Validators.required]);
  public lastName: FormControl = new FormControl(null, [Validators.required]);
  public userName: FormControl = new FormControl(null, [Validators.required]);
  public startingWeight: FormControl = new FormControl(null, [Validators.required, Validators.max(999)]);
  public height: FormControl = new FormControl(null, [Validators.required, Validators.max(999)]);
  public age: FormControl = new FormControl(null, [Validators.required, Validators.max(120)]);

  public bigCrumbCustom = true;
  public bigCrumbCustomType: FormControl = new FormControl(null, [Validators.required]);
  public bigCrumbCutomMaxValue: FormControl = new FormControl(null, [Validators.required, Validators.max(99999)]);
  public bigCrumbUserSetValue = 0;

  public littleCrumb1Custom = true;
  public littleCrumb1CustomType: FormControl = new FormControl(null);
  public littleCrumb1CutomMaxValue: FormControl = new FormControl(null, [Validators.max(99999)]);
  public littleCrumb1UserSetValue = 0;

  public littleCrumb2Custom = true;
  public littleCrumb2CustomType: FormControl = new FormControl(null);
  public littleCrumb2CutomMaxValue: FormControl = new FormControl(null, [Validators.max(99999)]);
  public littleCrumb2UserSetValue = 0;

  public littleCrumb3Custom = false;
  public littleCrumb3CustomType: FormControl = new FormControl(null);
  public littleCrumb3CutomMaxValue: FormControl = new FormControl(null, [Validators.max(99999)]);
  public littleCrumb3UserSetValue = 0;

  public littleCrumb4Custom = false;
  public littleCrumb4CustomType: FormControl = new FormControl(null);
  public littleCrumb4CutomMaxValue: FormControl = new FormControl(null, [Validators.max(99999)]);
  public littleCrumb4UserSetValue = 0;

  public littleCrumb5Custom = false;
  public littleCrumb5CustomType: FormControl = new FormControl(null);
  public littleCrumb5CutomMaxValue: FormControl = new FormControl(null, [Validators.max(99999)]);
  public littleCrumb5UserSetValue = 0;


  constructor(
    private http: HttpServiceCoreService
  ) {
  }

  ngOnInit() {
    this.http.getDatabaseState().subscribe(
      (res: IDataBaseIteration[]) => {
        console.log('Initial DB state: ', res[0].dbState);
        this.dbState = res[0].dbState + 1;
        console.log('New DB State: ', this.dbState);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public logger() {
    console.log(this.userEmail.value);
  }

}
