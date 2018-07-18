import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IUserDetails} from '../../_interfaces/IUserDetails';
import {IUserDietData} from '../../_interfaces/IUserDietData';
import {Subscription} from 'rxjs/Subscription';
import {SessionStorageService} from '../../_store/SessionStorage.service';
import {FormControl, Validators} from '@angular/forms';
import {DataManagerService} from '../../_services/data-manager.service';


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
    private session: SessionStorageService,
    private dataManager: DataManagerService
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

  public addPoints() {
    this.session.setDietDataBigCrumbUserSetValue(this.userDietData.bigCrumbUserSetValue + this.bigCrumb.value);
    console.log(this.session.getDietDataBigCrumbUserSetValue());
    this.session.setDietDataLittleCrumb1UserSetValue(this.userDietData.littleCrumb1UserSetValue + this.littleCrumb1.value);
    this.session.setDietDataLittleCrumb2UserSetValue(this.userDietData.littleCrumb2UserSetValue + this.littleCrumb2.value);
    this.session.setDietDataLittleCrumb3UserSetValue(this.userDietData.littleCrumb3UserSetValue + this.littleCrumb3.value);
    this.session.setDietDataLittleCrumb4UserSetValue(this.userDietData.littleCrumb4UserSetValue + this.littleCrumb4.value);
    this.session.setDietDataLittleCrumb5UserSetValue(this.userDietData.littleCrumb5UserSetValue + this.littleCrumb5.value);
    this.dataManager.update();
    this.modalClose.emit();
  }

  public closeMe() {
    this.modalClose.emit();
  }

}
