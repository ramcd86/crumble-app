import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {UserManagementService} from './user-management.service';
import {Subscription} from 'rxjs/Subscription';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserDetails} from '../_interfaces/IUserDetails';

@Injectable()

export class DataManagerService implements OnInit, OnDestroy {

  public subscription: Subscription;
  public subListId: Subscription;
  public subUserPresent: Subscription;
  public subUserDietData: Subscription;
  public subUserDetails: Subscription;

  public userDietData = <IUserDietData>{};
  public userDetails = <IUserDetails>{};
  public listId: number;
  public userPresent: boolean;

  constructor(
    private session: SessionStorageService,
    private user: UserManagementService
  ) {
    this.subscription = this.user.getStatus().subscribe(
      (status) => {
        if (status === true) {
          this.userPresent = this.user.getUserPresent();
          this.listId = this.user.getListId();
          this.userDetails = this.user.getUserDetails();
          this.userDietData = this.user.getUserDietData();
          // this.session.setUserPresent(this.userPresent);
          // this.session.setListId(this.listId);
          // this.session.setUserDetails(this.userDetails);
          // this.session.setUserDietData(this.userDietData);
          //
          this.session.inputUserPresent(this.userPresent);
          this.session.inputListId(this.listId);
          this.session.inputUserDetails(this.userDetails);
          this.session.inputUserDietData(this.userDietData);
          console.log(this.session);
        }
      }, (err) => {
        console.log(err);
      }, () => {
        this.subscription.unsubscribe();
        this.switchInternalSubscription();
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public switchInternalSubscription() {
    this.subListId = this.session.pipeListId().subscribe(
      (res) => {
        this.listId = res;
      }
    );

  }

  // Update user details by calling the Storage Service Object and replacing the Data Management Object with called -
  //  - Storage Service Object, then pass the newly updated Data Management Object into the User Management Service for processing.
  public updateUserDetails() {
    this.userDetails = this.session.getUserDetails();
    this.user.putUserDetails(this.userDetails);
  }

  public setUp() {
    this.user.construct();
  }
}
