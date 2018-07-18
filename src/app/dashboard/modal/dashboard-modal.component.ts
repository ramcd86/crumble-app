import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IUserDetails} from '../../_interfaces/IUserDetails';
import {IUserDietData} from '../../_interfaces/IUserDietData';
import {Subscription} from 'rxjs/Subscription';
import {SessionStorageService} from '../../_store/SessionStorage.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html'
})
export class DashboardModalComponent implements OnInit {

  @Input() public showWindow = false;
  @Output() public modalClose = new EventEmitter();

  public subUserDetails: Subscription;
  public subUserDietData: Subscription;
  public userDetails = <IUserDetails>{};
  public userDietData = <IUserDietData>{};

  public bigCrumb: FormControl = new FormControl(0);
  public littleCrumb1: FormControl = new FormControl(0);
  public littleCrumb2: FormControl = new FormControl(0);
  public littleCrumb3: FormControl = new FormControl(0);
  public littleCrumb4: FormControl = new FormControl(0);
  public littleCrumb5: FormControl = new FormControl(0);

  constructor(
    private session: SessionStorageService
  ) {
    this.subUserDetails = this.session.pipeUserDetails().subscribe(
      (res) => {
        this.userDetails = res;
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

  addPoints() {
    let currentBigCrumbValue = this.userDietData.bigCrumbUserSetValue;
    this.session.setDietDataBigCrumbUserSetValue();
  }

  public closeMe() {
    this.modalClose.emit();
  }

}
