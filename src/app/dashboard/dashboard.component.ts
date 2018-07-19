import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {SessionStorageService} from '../_store/SessionStorage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  @ViewChild('littleCrumb') public littleCrumb: ElementRef;
  @ViewChild('bigCrumb') public bigCrumb: ElementRef;

  @Input() public dataId: number;

  public showModalWindow = false;
  public modalWindowtype: string;
  public hideDash = false;

  constructor(
    public session: SessionStorageService
  ) {
  }

  ngOnInit() {
  }


  public bigCrumbCalculatorFunc() {
    const calCap = this.session.getDietDataBigCrumbCustomMaxValue() - this.session.getDietDataBigCrumbUserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataBigCrumbCustomMaxValue();
    return Totes - 100;
  }

  public littleCrumb1CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb1CustomMaxValue() - this.session.getDietDataLittleCrumb1UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb1CustomMaxValue();
    return Totes - 100;
  }

  public littleCrumb2CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb2CustomMaxValue() - this.session.getDietDataLittleCrumb2UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb2CustomMaxValue();
    return Totes - 100;
  }

  public littleCrumb3CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb3CustomMaxValue() - this.session.getDietDataLittleCrumb3UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb3CustomMaxValue();
    return Totes - 100;
  }

  public littleCrumb4CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb4CustomMaxValue() - this.session.getDietDataLittleCrumb4UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb4CustomMaxValue();
    return Totes - 100;
  }

  public littleCrumb5CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb5CustomMaxValue() - this.session.getDietDataLittleCrumb5UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb5CustomMaxValue();
    return Totes - 100;
  }

  public toggle() {
    window.scrollTo(0, 0);
    this.hideDash = !this.hideDash;
    if (this.showModalWindow === true) {
      this.showModalWindow = false;
    }
  }

  public modalToggle(value) {
    window.scrollTo(0, 0);
    this.modalWindowtype = value;
    this.showModalWindow = !this.showModalWindow;
    if (this.hideDash === false) {
      this.hideDash = true;
    }
    if (this.hideDash === true && this.showModalWindow === false) {
      this.hideDash = false;
    }
  }


}
