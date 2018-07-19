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
  public bigCrumbRingColor: string;
  public littleCrumb1RingColor: string;
  public littleCrumb2RingColor: string;
  public littleCrumb3RingColor: string;
  public littleCrumb4RingColor: string;
  public littleCrumb5RingColor: string;

  constructor(
    public session: SessionStorageService
  ) {
  }

  ngOnInit() {
  }

  public ringSetter() {
    if (this.session.getDietDataBigCrumbCustomMaxValue() < this.session.getDietDataBigCrumbUserSetValue()) {
      this.bigCrumbRingColor = '#FF0006';
    } else {
      this.bigCrumbRingColor = '#549500';
    }
    if (this.session.getDietDataLittleCrumb1CustomMaxValue() < this.session.getDietDataLittleCrumb1UserSetValue()) {
      this.littleCrumb1RingColor = '#FF0006';
    } else {
      this.littleCrumb1RingColor = '#549500';
    }
    if (this.session.getDietDataLittleCrumb2CustomMaxValue() < this.session.getDietDataLittleCrumb2UserSetValue()) {
      this.littleCrumb2RingColor = '#FF0006';
    } else {
      this.littleCrumb2RingColor = '#549500';
    }
    if (this.session.getDietDataLittleCrumb3CustomMaxValue() < this.session.getDietDataLittleCrumb3UserSetValue()) {
      this.littleCrumb3RingColor = '#FF0006';
    } else {
      this.littleCrumb3RingColor = '#549500';
    }
    if (this.session.getDietDataLittleCrumb4CustomMaxValue() < this.session.getDietDataLittleCrumb4UserSetValue()) {
      this.littleCrumb4RingColor = '#FF0006';
    } else {
      this.littleCrumb4RingColor = '#549500';
    }
    if (this.session.getDietDataLittleCrumb5CustomMaxValue() < this.session.getDietDataLittleCrumb5UserSetValue()) {
      this.littleCrumb5RingColor = '#FF0006';
    } else {
      this.littleCrumb5RingColor = '#549500';
    }
  }

  public bigCrumbCalculatorFunc() {
    const calCap = this.session.getDietDataBigCrumbCustomMaxValue() - this.session.getDietDataBigCrumbUserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataBigCrumbCustomMaxValue();
    this.ringSetter();
    return Totes - 100;
  }


  public littleCrumb1CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb1CustomMaxValue() - this.session.getDietDataLittleCrumb1UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb1CustomMaxValue();
    this.ringSetter();
    return Totes - 100;
  }

  public littleCrumb2CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb2CustomMaxValue() - this.session.getDietDataLittleCrumb2UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb2CustomMaxValue();
    this.ringSetter();
    return Totes - 100;
  }

  public littleCrumb3CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb3CustomMaxValue() - this.session.getDietDataLittleCrumb3UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb3CustomMaxValue();
    this.ringSetter();
    return Totes - 100;
  }

  public littleCrumb4CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb4CustomMaxValue() - this.session.getDietDataLittleCrumb4UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb4CustomMaxValue();
    this.ringSetter();
    return Totes - 100;
  }

  public littleCrumb5CalculatorFunc() {
    const calCap = this.session.getDietDataLittleCrumb5CustomMaxValue() - this.session.getDietDataLittleCrumb5UserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataLittleCrumb5CustomMaxValue();
    this.ringSetter();
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
