import {Component, OnDestroy, OnInit} from '@angular/core';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {DataManagerService} from '../_services/data-manager.service';
import {UserManagementService} from '../_services/user-management.service';
import {Subscription} from 'rxjs/Subscription';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {Title} from '@angular/platform-browser';
import {IUserDietData} from '../_interfaces/IUserDietData';

@Component({
  selector: 'app-user-administration',
  templateUrl: './user-administration.component.html'
})
export class UserAdministrationComponent implements OnInit, OnDestroy {

  public userDetails = <IUserDetails>{};
  public userDietData = <IUserDietData>{};

  constructor(
    private session: SessionStorageService,
  ) {

  }

  ngOnInit() {
    this.userDetails = this.session.getUserDetails();
    this.userDietData = this.session.getDietData();
  }

  ngOnDestroy() {
  }

}
