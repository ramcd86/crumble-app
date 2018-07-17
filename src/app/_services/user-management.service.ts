import {Injectable} from '@angular/core';
import {HttpServiceCore} from './http/http-service-core.service';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserAuth} from '../_interfaces/IUserAuth';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserManagementService {

  public userDetails = <IUserDetails>{};
  public userDeitData = <IUserDietData>{};
  public listId: string;
  public userPresent: boolean;
  public completeStatus: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpServiceCore,
    // private session: SessionStorageService
  ) {

  }

  public sendStatus(value: boolean) {
    this.completeStatus.next(value);
  }

  public getStatus(): Observable <boolean> {
    return this.completeStatus.asObservable();
  }

  public construct() {
    this.http.profile().subscribe(
      (res: IUserAuth) => {
        const responseEntry = res.registerListId;
        this.listId = responseEntry.split('_')[1];
        this.generateAuthenticationObject(this.listId);
        // this.listId = res.registerListId;
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
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.sendStatus(true);
      }
    );
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
    this.http.putUserDietData(data);
  }

  public putUserDetails(data: IUserDetails) {
    this.http.putUserDetails(data);
}

}
