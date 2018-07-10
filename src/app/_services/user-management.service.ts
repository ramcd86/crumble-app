import {Injectable} from '@angular/core';
import {HttpServiceCore} from './http/http-service-core.service';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserAuth} from '../_interfaces/IUserAuth';


@Injectable()
export class UserManagementService {

  constructor(
    private http: HttpServiceCore,
    private session: SessionStorageService
  ) {

  }

  public construct() {
    this.http.profile().subscribe(
      (res: IUserAuth) => {
        this.generateAuthenticationObject(res.dataId);
      }, (err) => {
        console.error(err);
      });
  }
  public generateAuthenticationObject(listId: number) {
    this.session.setUserPresent(true);
    this.session.setListId(listId);
    this.http.getUserPersonalDetails(listId).subscribe(
      (res: IUserDetails) => {
        this.session.setUserDetails(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.http.getUserDietData(listId).subscribe(
      (res: IUserDietData) => {
        this.session.setUserDietData(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public putUserDietData(data: IUserDietData) {
    this.http.putUserDietData(data);
  }

  public putUserDetails(data: IUserDetails) {
    this.http.putUserDetails(data);
}

}
