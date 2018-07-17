import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCore} from '../_services/http/http-service-core.service';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IDataBaseIteration} from '../_interfaces/IDataBaseIteration';
import {ITokenPayload} from '../_interfaces/IUserAuth';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {

  public dbState = <IDataBaseIteration>{};
  public newUserDetails = <IUserDetails>{};
  public newUserDietData = <IUserDietData>{};
  public newUserRegistration = <ITokenPayload>{};
  public switchTemp = false;
  public crumb3Toggle = false;
  public crumb4Toggle = false;
  public crumb5Toggle = false;
  public httpError: boolean;
  public validDetails = true;
  public userEmail: FormControl = new FormControl(null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
  public password1: FormControl = new FormControl(null, [Validators.required]);
  public password2: FormControl = new FormControl(null, [Validators.required]);
  public dataId: number;
  public userName: FormControl = new FormControl(null, [Validators.required]);
  public startingWeight: FormControl = new FormControl(null, [Validators.required, Validators.max(999)]);
  public height: FormControl = new FormControl(null, [Validators.required, Validators.max(999)]);
  public age: FormControl = new FormControl(null, [Validators.required, Validators.max(120)]);
  public weightHistory = [];
  public bigCrumbCustom = true;
  public bigCrumbCustomType: FormControl = new FormControl(null, [Validators.required]);
  public bigCrumbCustomMaxValue: FormControl = new FormControl(null, [Validators.required, Validators.max(99999)]);
  public bigCrumbUserSetValue = 0;
  public bigCrumbDefault = 0;
  public bigCrumbHistory = [];
  public littleCrumb1Custom = true;
  public littleCrumb1CustomType: FormControl = new FormControl(null, [Validators.required]);
  public littleCrumb1CustomMaxValue: FormControl = new FormControl(null, [Validators.required, Validators.max(99999)]);
  public littleCrumb1UserSetValue = 0;
  public littleCrumb1Default = 0;
  public littleCrumb1History = [];
  public littleCrumb2Custom = true;
  public littleCrumb2CustomType: FormControl = new FormControl(null, [Validators.required]);
  public littleCrumb2CustomMaxValue: FormControl = new FormControl(null, [Validators.required, Validators.max(99999)]);
  public littleCrumb2UserSetValue = 0;
  public littleCrumb2Default = 0;
  public littleCrumb2History = [];
  public littleCrumb3Custom = false;
  public littleCrumb3CustomType: FormControl = new FormControl('Points');
  public littleCrumb3CustomMaxValue: FormControl = new FormControl(0, [Validators.max(99999)]);
  public littleCrumb3UserSetValue = 0;
  public littleCrumb3Default = 0;
  public littleCrumb3History = [];
  public littleCrumb4Custom = false;
  public littleCrumb4CustomType: FormControl = new FormControl('Points');
  public littleCrumb4CustomMaxValue: FormControl = new FormControl(0, [Validators.max(99999)]);
  public littleCrumb4UserSetValue = 0;
  public littleCrumb4Default = 0;
  public littleCrumb4History = [];
  public littleCrumb5Custom = false;
  public littleCrumb5CustomType: FormControl = new FormControl('Points');
  public littleCrumb5CustomMaxValue: FormControl = new FormControl(0, [Validators.max(99999)]);
  public littleCrumb5UserSetValue = 0;
  public littleCrumb5Default = 0;
  public littleCrumb5History = [];


  constructor(
    private http: HttpServiceCore,
    private titleService: Title,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Crumbs - Registration');
  }

  public register() {
    let iterationCount = 0;
    this.http.getDatabaseState().subscribe(
      (res: IDataBaseIteration) => {
        console.log(res[0]);
        this.dbState = res[0];
        console.log(this.dbState);
        iterationCount = res[0].dbState + 1;
        console.log(iterationCount);
        this.httpError = false;
        console.log(this.httpError);
      },
      (err) => {
        console.log(err);
        this.httpError = true;
      },
      () => {
        this.dbState.dbState = this.dbState.dbState + 1;
        this.createNewUserLogin(iterationCount);
      }
    );
  }

  public createNewUserLogin(iterationCount: number) {
    this.newUserRegistration.email = this.userEmail.value;
    this.newUserRegistration.password = this.password1.value;
    this.newUserRegistration.name = this.userName.value;
    this.newUserRegistration.registerListId = 'registerListId_' + iterationCount.toString();
    console.log(this.newUserRegistration);
    this.http.register(this.newUserRegistration).subscribe(
      (res) => {
        console.log(res);
        this.httpError = false;
      },
      (err) => {
        console.log(err);
        this.httpError = true;
      },
      () => {
        this.createNewUserDetails(iterationCount);
      }
    );
  }

  public createNewUserDetails(iterationCount: number) {
    this.newUserDetails.userDetailsListId = 'userDetailsListId_' + iterationCount.toString();
    this.newUserDetails.userName = this.userName.value;
    this.newUserDetails.startingWeight = this.startingWeight.value;
    this.newUserDetails.weightHistory = this.weightHistory;
    this.newUserDetails.height = this.height.value;
    this.newUserDetails.age = this.age.value;
    console.log(this.newUserDetails);
    this.http.postNewUserDetails(this.newUserDetails).subscribe(
      (res) => {
        console.log(res);
        this.httpError = false;
      },
      (err) => {
        console.log(err);
        this.httpError = true;
      },
      () => {
        this.createNewUserDietData(iterationCount);
      }
    );
  }

  public createNewUserDietData(iterationCount: number) {
    this.newUserDietData.userDietDataListId = 'userDietDataListId_' + iterationCount.toString();
    this.newUserDietData.bigCrumbCustom = this.bigCrumbCustom;
    this.newUserDietData.bigCrumbDefault = this.bigCrumbDefault;
    this.newUserDietData.bigCrumbCustomType = this.bigCrumbCustomType.value;
    this.newUserDietData.bigCrumbCustomMaxValue = this.bigCrumbCustomMaxValue.value;
    this.newUserDietData.bigCrumbUserSetValue = this.bigCrumbUserSetValue;
    this.newUserDietData.bigCrumbHistory = this.bigCrumbHistory;
    this.newUserDietData.littleCrumb1Custom = this.littleCrumb1Custom;
    this.newUserDietData.littleCrumb1Default = this.littleCrumb1Default;
    this.newUserDietData.littleCrumb1CustomType = this.littleCrumb1CustomType.value;
    this.newUserDietData.littleCrumb1CustomMaxValue = this.littleCrumb1CustomMaxValue.value;
    this.newUserDietData.littleCrumb1UserSetValue = this.littleCrumb1UserSetValue;
    this.newUserDietData.littleCrumb1History = this.littleCrumb1History;
    this.newUserDietData.littleCrumb2Custom = this.littleCrumb2Custom;
    this.newUserDietData.littleCrumb2Default = this.littleCrumb2Default;
    this.newUserDietData.littleCrumb2CustomType = this.littleCrumb2CustomType.value;
    this.newUserDietData.littleCrumb2CustomMaxValue = this.littleCrumb2CustomMaxValue.value;
    this.newUserDietData.littleCrumb2UserSetValue = this.littleCrumb2UserSetValue;
    this.newUserDietData.littleCrumb2History = this.littleCrumb2History;
    this.newUserDietData.littleCrumb3Custom = this.littleCrumb3Custom;
    this.newUserDietData.littleCrumb3Default = this.littleCrumb3Default;
    this.newUserDietData.littleCrumb3CustomType = this.littleCrumb3CustomType.value;
    this.newUserDietData.littleCrumb3CustomMaxValue = this.littleCrumb3CustomMaxValue.value;
    this.newUserDietData.littleCrumb3UserSetValue = this.littleCrumb3UserSetValue;
    this.newUserDietData.littleCrumb3History = this.littleCrumb3History;
    this.newUserDietData.littleCrumb4Custom = this.littleCrumb4Custom;
    this.newUserDietData.littleCrumb4Default = this.littleCrumb4Default;
    this.newUserDietData.littleCrumb4CustomType = this.littleCrumb4CustomType.value;
    this.newUserDietData.littleCrumb4CustomMaxValue = this.littleCrumb4CustomMaxValue.value;
    this.newUserDietData.littleCrumb4UserSetValue = this.littleCrumb4UserSetValue;
    this.newUserDietData.littleCrumb4History = this.littleCrumb4History;
    this.newUserDietData.littleCrumb5Custom = this.littleCrumb5Custom;
    this.newUserDietData.littleCrumb5Default = this.littleCrumb5Default;
    this.newUserDietData.littleCrumb5CustomType = this.littleCrumb5CustomType.value;
    this.newUserDietData.littleCrumb5CustomMaxValue = this.littleCrumb5CustomMaxValue.value;
    this.newUserDietData.littleCrumb5UserSetValue = this.littleCrumb5UserSetValue;
    this.newUserDietData.littleCrumb5History = this.littleCrumb5History;
    console.log(this.newUserDietData);
    this.http.postNewUserDietData(this.newUserDietData).subscribe(
      (res) => {
        console.log(res);
        this.httpError = false;
      },
      (err) => {
        console.log(err);
        this.httpError = true;
      },
      () => {
        this.pushNewDbState(this.dbState);
      }
    );
  }

  public pushNewDbState(state: IDataBaseIteration) {
    this.http.putDbState(state).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        window.scrollTo(0, 0);
        this.router.navigateByUrl('/home');
      }
    );
  }

  public toggleSwitchTemplate() {
    this.switchTemp = !this.switchTemp;
    window.scrollTo(0, 0);
  }

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

}
