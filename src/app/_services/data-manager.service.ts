import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {UserManagementService} from './user-management.service';
import {Subscription} from 'rxjs/Subscription';

@Injectable()

export class DataManagerService implements OnInit, OnDestroy {

  public subscription: Subscription;
  public userConfirmedStatus: boolean;

  constructor(
    private session: SessionStorageService,
    private user: UserManagementService
  ) {
    this.subscription = this.user.getStatus().subscribe(
      (status) => {
        if (status === true) {
          this.session.setUserPresent(this.user.getUserPresent());
          this.session.setListId(this.user.getListId());
          this.session.setUserDetails(this.user.getUserDetails());
          this.session.setUserDietData(this.user.getUserDietData());
          console.log(this.session);
        }
      }
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public setUp() {
    this.user.construct();
  }
}
