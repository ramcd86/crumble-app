import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceCore {

  public mockServiceBaseUrl = 'http://localhost:4200';

  constructor(
    private http: HttpClient) {
  }

  public getMock(): Observable<any> {
    return this.http.get(this.mockServiceBaseUrl).map(
      (res: Response) => res.json()
    );
  }

}
