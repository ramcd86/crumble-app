import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class WindowService {

  // public window = window.innerWidth;
  public windowExport: Subject<any> = new Subject<any>();

  constructor(
    private subscribe: Subscription
  ) {

  }

  public broadcastWindow() {
    return this.windowExport.next(window.innerWidth);
  }

  // public nfsoUserPresent: Subject<boolean> = new Subject<boolean>();
  // // public nfsoUserPresent: any;
  //
  // public setDetect(value: any) {
  //   this.nfsoUserPresent.next(value);
  // }

  public getDetect(): Observable<boolean> {
    // return Observable.of(this.nfsoUserPresent);
    return <Observable<boolean>>this.windowExport;
  }

}
