import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnvironmentEndpoints} from '../../_constants/environments';
import 'rxjs/add/operator/map';
import {IUserDetails} from '../../_interfaces/IUserDetails';
import {IUserDietData} from '../../_interfaces/IUserDietData';
import {IUserLogin} from '../../_interfaces/IUserLogin';
import {IDataBaseIteration} from '../../_interfaces/IDataBaseIteration';

@Injectable()
export class HttpServiceCore {

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
      (res: IDataBaseIteration) => res
    );
  }

  public getLoginAuthentication(email: string, password: string): Observable<any> {
    const endPoint = `userLogin/${email}/${password}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: IUserLogin) => res
      //   console.log('Object: ', res, 'Element');
      // }
    );
  }

  public getUserDetails(listId: number): Observable<any> {
    const endPoint = `userDetails/${listId}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: IUserDetails) => res
    );
  }

  public getUserDietData(listId: number): Observable<any> {
    const endPoint = `userDietData/${listId}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: IUserDietData) => res
    );
  }


  // #############################
  // POST NEW DATA TO THE USER DATABASE
  // #############################

  public postNewUserLogin(userDetails: IUserLogin): Observable<any> {
    const endPoint = 'userLogin/';
    return this.http.post(this.httpBase + endPoint, userDetails).map(
      (res: IUserLogin) => res
    );
  }

  public postNewUserDetails(userDetails: IUserDetails): Observable<any> {
    const endPoint = 'userDetails/';
    return this.http.post(this.httpBase + endPoint, userDetails).map(
      (res: IUserDetails) => res
    );
  }

  public postNewUserDietData(userDietData: IUserDietData): Observable<any> {
    const endPoint = 'userDietData/';
    return this.http.post(this.httpBase + endPoint, userDietData).map(
      (res: IUserDietData) => res
    );
  }


  // #############################
  // PUT UPDATED DATA INTO EXISTING DB ENTRIES
  // #############################

  public putDbState(dbState: IDataBaseIteration): Observable<any> {
    const endPoint = `dbState/${dbState.listId}`;
    return this.http.put(this.httpBase + endPoint, dbState).map(
      (res: IUserLogin) => res
    );
  }

  public putUserLogin(userLogin: IUserLogin): Observable<any> {
    const endPoint = `userLogin/${userLogin.listId}`;
    return this.http.put(this.httpBase + endPoint, userLogin).map(
      (res: IUserLogin) => res
    );
  }

  public putUserDetails(userDetails: IUserDetails): Observable<any> {
    const endPoint = `userDetails/${userDetails.listId}`;
    return this.http.put(this.httpBase + endPoint, userDetails).map(
      (res: IUserDetails) => res
    );
  }

  public putUserDietData(userDietData: IUserDietData): Observable<any> {
    const endPoint = `userDietData/${userDietData.listId}`;
    return this.http.put(this.httpBase + endPoint, userDietData).map(
      (res: IUserDietData) => res
    );
  }

}
