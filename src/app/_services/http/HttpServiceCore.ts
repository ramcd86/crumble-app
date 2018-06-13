import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnvironmentEndpoints} from '../../_constants/environments';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceCore {

  public endpoint = EnvironmentEndpoints.ENDPOINT;

  constructor(
    private http: HttpClient) {
  }

  public getMock(): Observable<any> {
    return this.http.get(this.endpoint).map(
      (res: Response) => res.json()
    );
  }

}
