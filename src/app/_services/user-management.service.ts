import {Injectable} from '@angular/core';
import {HttpServiceCore} from './http/http-service-core.service';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserAuth} from '../_interfaces/IUserAuth';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment/';


@Injectable()
export class UserManagementService {

  public userDetails = <IUserDetails>{};
  public userDeitData = <IUserDietData>{};
  public listId: string;
  public userPresent: boolean;
  public completeStatus: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpServiceCore
  ) {

  }

  public sendStatus(value: boolean) {
    this.completeStatus.next(value);
  }

  public getStatus(): Observable<boolean> {
    return this.completeStatus.asObservable();
  }

  public construct() {
    this.http.profile().subscribe(
      (res: IUserAuth) => {
        const responseEntry = res.registerListId;
        this.listId = responseEntry.split('_')[1];
        this.generateAuthenticationObject(this.listId);
        this.userPresent = true;
      }, (err) => {
        console.error(err);
      });
  }

  public generateAuthenticationObject(listId: string) {
    const userDetailsListId = 'userDetailsListId_' + listId;
    const userDietDataListId = 'userDietDataListId_' + listId;
    this.http.getUserPersonalDetails(userDetailsListId).subscribe(
      (res: IUserDetails) => {
        this.userDetails = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.http.getUserDietData(userDietDataListId).subscribe(
      (res: IUserDietData) => {
        this.userDeitData = res;
        console.log(this.userDeitData);
      },
      (err) => {
        console.log(err);
      },
      () => {
        const today = moment().format('L');
        if (this.userDeitData.today !== today) {
          this.userDeitData.bigCrumbHistory.push(this.userDeitData.bigCrumbUserSetValue);
          this.userDeitData.littleCrumb1History.push(this.userDeitData.littleCrumb1UserSetValue);
          this.userDeitData.littleCrumb2History.push(this.userDeitData.littleCrumb2UserSetValue);
          this.userDeitData.littleCrumb3History.push(this.userDeitData.littleCrumb3UserSetValue);
          this.userDeitData.littleCrumb4History.push(this.userDeitData.littleCrumb4UserSetValue);
          this.userDeitData.littleCrumb5History.push(this.userDeitData.littleCrumb5UserSetValue);
          this.userDeitData.bigCrumbUserSetValue = 0;
          this.userDeitData.littleCrumb1UserSetValue = 0;
          this.userDeitData.littleCrumb2UserSetValue = 0;
          this.userDeitData.littleCrumb3UserSetValue = 0;
          this.userDeitData.littleCrumb4UserSetValue = 0;
          this.userDeitData.littleCrumb5UserSetValue = 0;
          this.userDeitData.today = today;
          this.putUserDietData(this.userDeitData);
          this.construct();
          this.sendStatus(true);
        } else {
          this.sendStatus(true);
        }
      }
    );
  }

  public archiveProcess(): boolean {
    if (this.userDeitData.today !== moment().format('L')) {
      this.userDeitData.bigCrumbHistory.push(this.userDeitData.bigCrumbUserSetValue);
      this.userDeitData.littleCrumb1History.push(this.userDeitData.littleCrumb1UserSetValue);
      this.userDeitData.littleCrumb2History.push(this.userDeitData.littleCrumb2UserSetValue);
      this.userDeitData.littleCrumb3History.push(this.userDeitData.littleCrumb3UserSetValue);
      this.userDeitData.littleCrumb4History.push(this.userDeitData.littleCrumb4UserSetValue);
      this.userDeitData.littleCrumb5History.push(this.userDeitData.littleCrumb5UserSetValue);
      this.userDeitData.bigCrumbUserSetValue = 0;
      this.userDeitData.littleCrumb1UserSetValue = 0;
      this.userDeitData.littleCrumb2UserSetValue = 0;
      this.userDeitData.littleCrumb3UserSetValue = 0;
      this.userDeitData.littleCrumb4UserSetValue = 0;
      this.userDeitData.littleCrumb5UserSetValue = 0;
      this.putUserDietData(this.userDeitData);
      this.construct();
      return true;
    } else {
      return false;
    }

  }

  public update() {
  }

  public getUserDietData() {
    return this.userDeitData;
  }

  public getUserDetails() {
    return this.userDetails;
  }

  public getListId() {
    return this.listId;
  }

  public getUserPresent() {
    return this.userPresent;
  }

  public putUserDietData(data: IUserDietData) {
    console.log('USER PUT: ', data);
    this.http.putUserDietData(data);
  }

  public putUserDetails(data: IUserDetails) {
    this.http.putUserDetails(data);
  }

}
