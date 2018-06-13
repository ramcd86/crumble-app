import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnvironmentEndpoints} from '../../_constants/environments';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceCore {

  public httpBase = EnvironmentEndpoints.ENDPOINT;

  constructor(
    private http: HttpClient) {
  }

  public getUserDetails(): Observable<any> {
    const endPoint = 'userDetails/';
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }

  public getUserDietData(): Observable<any> {
    const endPoint = 'userDietData/';
    return this.http.get(this.httpBase + endPoint).map(
      (res: Response) => res
    );
  }

}
