import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';

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

}
