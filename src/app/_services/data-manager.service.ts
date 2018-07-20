import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {UserManagementService} from './user-management.service';
import {Subscription} from 'rxjs/Subscription';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserDetails} from '../_interfaces/IUserDetails';

// import moment as moment;


@Injectable()

export class DataManagerService implements OnInit, OnDestroy {

  public subscription: Subscription;
  public subListId: Subscription;
  // public subUserPresent: Subscription;
  public subUserDietData: Subscription;
  public subUserDetails: Subscription;

  public userDietData = <IUserDietData>{};
  public userDetails = <IUserDetails>{};
  public listId: string;
  public userPresent: boolean;

  constructor(
    private session: SessionStorageService,
    private user: UserManagementService
  ) {
    this.subscription = this.user.getStatus().subscribe(
      (status) => {
        if (status === true) {
          this.assembler();
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
    this.subListId.unsubscribe();
    this.subUserDietData.unsubscribe();
    this.subUserDetails.unsubscribe();
  }

  public assembler() {
    this.userPresent = this.user.getUserPresent();
    this.listId = this.user.getListId();
    this.userDetails = this.user.getUserDetails();
    this.userDietData = this.user.getUserDietData();
    this.session.inputUserPresent(this.userPresent);
    this.session.inputListId(this.listId);
    this.session.inputUserDetails(this.userDetails);
    this.session.inputUserDietData(this.userDietData);
  }

  public switchInternalSubscription() {
    this.subListId = this.session.pipeListId().subscribe(
      (res) => {
        this.listId = res;
      }
    );
    this.subUserDietData = this.session.pipeUserDietData().subscribe(
      (res) => {
        this.userDietData = res;
      }
    );
    this.subUserDetails = this.session.pipeUserDetails().subscribe(
      (res) => {
        this.userDetails = res;
      }
    );
  }

  // Update user details by calling the Storage Service Object and replacing the Data Management Object with called -
  //  - Storage Service Object, then pass the newly updated Data Management Object into the User Management Service for processing.
  // public updateUserDetails() {
  //   this.userDetails = this.session.getUserDetails();
  //   this.user.putUserDetails(this.userDetails);
  // }

  public update() {
    console.log(this.userDietData);
    this.user.sendStatus(false);
    this.user.putUserDietData(this.userDietData);
    this.user.putUserDetails(this.userDetails);
    this.user.construct();
  }

  public setUp() {
    this.user.construct();
  }
}
