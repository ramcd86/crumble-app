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

  public subUserDetails: Subscription;
  public subUserDietData: Subscription;
  public userDetails = <IUserDetails>{};
  public userDietData = <IUserDietData>{};

  constructor(
    private session: SessionStorageService,
    // private dataManager: DataManagerService,
    // private user: UserManagementService,
    private titleService: Title
  ) {
    this.subUserDetails = this.session.pipeUserDetails().subscribe(
      (res) => {
        this.userDetails = res;
        this.titleService.setTitle(`Crumbs - ${res.userName}.`);
        console.log(this.userDetails.userName);
      }
    );
    this.subUserDietData = this.session.pipeUserDietData().subscribe(
      (res) => {
        this.userDietData = res;
      }
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subUserDetails.unsubscribe();
    this.subUserDetails.unsubscribe();
  }

}
