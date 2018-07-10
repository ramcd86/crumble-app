import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  @ViewChild('littleCrumb') public littleCrumb: ElementRef;
  @ViewChild('bigCrumb') public bigCrumb: ElementRef;

  @Input() public dataId: number;

  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Syns';
  public windowDesktop = true;
  public hideDash = false;
  public pointHolder: FormControl = new FormControl(0, [Validators.required]);

  // public windowMeasure: number;
  // @HostListener('window:resize', ['$event']) onResize(event) {
  //   this.windowMeasure = event.target.innerWidth;
  //   // console.log(event.target.innerWidth);
  //   // console.log(event.target.innerHeight);
  // }


  constructor(
    public session: SessionStorageService
  ) {
  }

  ngOnInit() {
    // this.session.set
  }



  public calculatorFunc() {
    // const calCap = this.totalSyns - this.userSyns;
    const calCap = this.session.getDietDataBigCrumbCustomMaxValue() - this.session.getDietDataBigCrumbUserSetValue();
      // this.session.getDietDataBigCrumbUserSetValue();
    const Totes = (calCap * 100) / this.session.getDietDataBigCrumbCustomMaxValue();
    return Totes - 100;
  }

  public toggle() {
    this.hideDash = !this.hideDash;
  }

  public simpleSetter() {
    console.log(this.pointHolder.value);
    this.session.setDietDataBigCrumbUserSetValue(this.pointHolder.value);
    console.log(this.session.getDietDataBigCrumbUserSetValue());
    this.calculatorFunc();
    console.log(this.calculatorFunc());
  }

}
