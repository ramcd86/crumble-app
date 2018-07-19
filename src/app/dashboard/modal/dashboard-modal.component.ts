import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IUserDetails} from '../../_interfaces/IUserDetails';
import {IUserDietData} from '../../_interfaces/IUserDietData';
import {Subscription} from 'rxjs/Subscription';
import {SessionStorageService} from '../../_store/SessionStorage.service';
import {FormControl} from '@angular/forms';
import {DataManagerService} from '../../_services/data-manager.service';


@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html'
})
export class DashboardModalComponent implements OnInit {

  @Input() public showWindow = false;
  @Input() public modalWindowType: string;
  @Output() public modalClose = new EventEmitter();

  public warningShow = false;
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
    this.session.setDietDataLittleCrumb1UserSetValue(this.userDietData.littleCrumb1UserSetValue + this.littleCrumb1.value);
    this.session.setDietDataLittleCrumb2UserSetValue(this.userDietData.littleCrumb2UserSetValue + this.littleCrumb2.value);
    this.session.setDietDataLittleCrumb3UserSetValue(this.userDietData.littleCrumb3UserSetValue + this.littleCrumb3.value);
    this.session.setDietDataLittleCrumb4UserSetValue(this.userDietData.littleCrumb4UserSetValue + this.littleCrumb4.value);
    this.session.setDietDataLittleCrumb5UserSetValue(this.userDietData.littleCrumb5UserSetValue + this.littleCrumb5.value);
    this.dataManager.update();
    this.modalClose.emit();
    this.resetFormData();
  }

  public takePoints() {
    let checkerPass = true;
    if ((this.userDietData.bigCrumbUserSetValue - this.bigCrumb.value) >= 0) {
      this.session.setDietDataBigCrumbUserSetValue(this.userDietData.bigCrumbUserSetValue - this.bigCrumb.value);
    } else {
      checkerPass = false;
      this.warningShow = true;
      window.scrollTo(0, 0);
    }
    if ((this.userDietData.littleCrumb1UserSetValue - this.littleCrumb1.value) >= 0) {
      this.session.setDietDataLittleCrumb1UserSetValue(this.userDietData.littleCrumb1UserSetValue - this.littleCrumb1.value);
    } else {
      checkerPass = false;
      this.warningShow = true;
      window.scrollTo(0, 0);
    }
    if ((this.userDietData.littleCrumb2UserSetValue - this.littleCrumb2.value) >= 0) {
      this.session.setDietDataLittleCrumb2UserSetValue(this.userDietData.littleCrumb2UserSetValue - this.littleCrumb2.value);
    } else {
      checkerPass = false;
      this.warningShow = true;
      window.scrollTo(0, 0);
    }
    if ((this.userDietData.littleCrumb3UserSetValue - this.littleCrumb3.value) >= 0) {
      this.session.setDietDataLittleCrumb3UserSetValue(this.userDietData.littleCrumb3UserSetValue - this.littleCrumb3.value);
    } else {
      checkerPass = false;
      this.warningShow = true;
      window.scrollTo(0, 0);
    }
    if ((this.userDietData.littleCrumb4UserSetValue - this.littleCrumb4.value) >= 0) {
      this.session.setDietDataLittleCrumb4UserSetValue(this.userDietData.littleCrumb4UserSetValue - this.littleCrumb4.value);
    } else {
      checkerPass = false;
      this.warningShow = true;
      window.scrollTo(0, 0);
    }
    if ((this.userDietData.littleCrumb5UserSetValue - this.littleCrumb5.value) >= 0) {
      this.session.setDietDataLittleCrumb5UserSetValue(this.userDietData.littleCrumb5UserSetValue - this.littleCrumb5.value);
    } else {
      checkerPass = false;
      this.warningShow = true;
      window.scrollTo(0, 0);
    }
    if (checkerPass === true) {
      this.warningShow = false;
      this.dataManager.update();
      this.modalClose.emit();
      this.resetFormData();
    }
  }

  public closeMe() {
    this.warningShow = false;
    this.modalClose.emit();
    this.resetFormData();
  }

  public resetFormData() {
    this.bigCrumb.setValue(0);
    this.littleCrumb1.setValue(0);
    this.littleCrumb2.setValue(0);
    this.littleCrumb3.setValue(0);
    this.littleCrumb4.setValue(0);
    this.littleCrumb5.setValue(0);
  }

}
