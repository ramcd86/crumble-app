import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnvironmentEndpoints} from '../../_constants/environments';
import 'rxjs/add/operator/map';
import {IUserDetails} from '../../_interfaces/IUserDetails';
import {IUserDietData} from '../../_interfaces/IUserDietData';
import {IUserLogin} from '../../_interfaces/IUserLogin';
import {IDataBaseIteration} from '../../_interfaces/IDataBaseIteration';
import {Router} from '@angular/router';
import {ITokenPayload, ITokenResponse, IUserAuth} from '../../_interfaces/IUserAuth';
import {map} from 'rxjs/operators/map';
import {SessionStorageService} from '../../_store/SessionStorage.service';

@Injectable()
export class HttpServiceCore {

  public httpBase = EnvironmentEndpoints.ENDPOINT;
  private token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private session: SessionStorageService
  ) {
  }

  // #############################
  // REGISTER AND AUTHENTICATE USERS
  // #############################


  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails(): IUserAuth {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: ITokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }

    const request = base.pipe(
      map((data: ITokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: ITokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: ITokenPayload): Observable<any> {
    // console.log('user', user.dataId);
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public logout(): void {
    this.session.setUserPresent(false);
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/login');
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

  public getUserPersonalDetails(listId: string): Observable<any> {
    const endPoint = `userDetails/${listId}`;
    return this.http.get(this.httpBase + endPoint).map(
      (res: IUserDetails) => res
    );
  }

  public getUserDietData(listId: string): Observable<any> {
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
    const endPoint = `userDetails/${userDetails.userDetailsListId}`;
    return this.http.put(this.httpBase + endPoint, userDetails).map(
      (res: IUserDetails) => res
    );
  }

  public putUserDietData(userDietData: IUserDietData): Observable<any> {
    const endPoint = `userDietData/${userDietData.userDietDataListId}`;
    return this.http.put(this.httpBase + endPoint, userDietData).map(
      (res: IUserDietData) => res
    );
  }

}
