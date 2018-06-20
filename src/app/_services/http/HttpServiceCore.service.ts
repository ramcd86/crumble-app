import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnvironmentEndpoints} from '../../_constants/environments';
import 'rxjs/add/operator/map';
import {IUserDetails} from '../../_interfaces/IUserDetails';
import {IUserDietData} from '../../_interfaces/IUserDietData';

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
    const endPoint = `databaseState/`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }

  public getLoginAuthentication(email, password): Observable<any> {
    const endPoint = `userLogin/?email=${email}&password=${password}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }

  public getUserDetails(data_id): Observable<any> {
    const endPoint = `userDetails/${data_id}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }

  public getUserDietData(data_id): Observable<any> {
    const endPoint = `userDetails/${data_id}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }


  // #############################
  // POST NEW DATA TO THE USER DATABASE
  // #############################


  public postUserDetails(userDetails: IUserDetails): Observable<any> {
    const endPoint = 'userDetails/';
    return this.http.post(this.httpBase + endPoint, userDetails).map(
      (res: Response) => res
    );
  }

  public postUserDietData(userDietData: IUserDietData): Observable<any> {
    const endPoint = 'userDietData/';
    return this.http.post(this.httpBase + endPoint, userDietData).map(
      (res: Response) => res
    );
  }


  // #############################
  // PUT UPDATED DATA INTO EXISTING DB ENTRIES
  // #############################


}
