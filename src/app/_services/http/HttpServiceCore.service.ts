import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnvironmentEndpoints} from '../../_constants/environments';
import 'rxjs/add/operator/map';
import {IUserDetails} from '../../_interfaces/IUserDetails';
import {IUserDietData} from '../../_interfaces/IUserDietData';
import {IUserLogin} from '../../_interfaces/IUserLogin';

@Injectable()
export class HttpServiceCoreService {

  public httpBase = EnvironmentEndpoints.ENDPOINT;

  constructor(
    private http: HttpClient) {
  }


  // #############################
  // GET DATA RETURNS FROM USER DATABASE
  // #############################


  public getDatabaseState(): Observable<any> {
    const endPoint = `dbState/`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }git add -A
  public getLoginAuthentication(email: IUserLogin, password: IUserLogin): Observable<any> {
    const endPoint = `userLogin/${email}/${password}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }
  public getUserDetails(listId: IUserDetails): Observable<any> {
    const endPoint = `userDetails/${listId}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }
  public getUserDietData(listId: IUserDietData): Observable<any> {
    const endPoint = `userDietData/${listId}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }


  // #############################
  // POST NEW DATA TO THE USER DATABASE
  // #############################

  public postNewUserLogin(userDetails: IUserLogin): Observable<any> {
    const endPoint = 'userLogin/';
    return this.http.post(this.httpBase + endPoint, userDetails).map(
      (res: Response) => res
    );
  }
  public postNewUserDetails(userDetails: IUserDetails): Observable<any> {
    const endPoint = 'userDetails/';
    return this.http.post(this.httpBase + endPoint, userDetails).map(
      (res: Response) => res
    );
  }
  public postNewUserDietData(userDietData: IUserDietData): Observable<any> {
    const endPoint = 'userDietData/';
    return this.http.post(this.httpBase + endPoint, userDietData).map(
      (res: Response) => res
    );
  }


  // #############################
  // PUT UPDATED DATA INTO EXISTING DB ENTRIES
  // #############################

  public putUserLogin(userLogin: IUserLogin): Observable<any> {
    const endPoint = `userLogin/${userLogin.listId}`;
    return this.http.post(this.httpBase + endPoint, userLogin).map(
      (res: Response) => res
    );
  }
  public putUserDetails(userDetails: IUserDetails): Observable<any> {
    const endPoint = `userDetails/${userDetails.listId}`;
    return this.http.post(this.httpBase + endPoint, userDetails).map(
      (res: Response) => res
    );
  }
  public putUserDietData(userDietData: IUserDietData): Observable<any> {
    const endPoint = `userDietData/${userDietData.listId}`;
    return this.http.post(this.httpBase + endPoint, userDietData).map(
      (res: Response) => res
    );
  }

}
