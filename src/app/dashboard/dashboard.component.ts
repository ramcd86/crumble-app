import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, HostListener} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('littleCrumb') public littleCrumb: ElementRef;
  @ViewChild('bigCrumb') public bigCrumb: ElementRef;

  @Input() public dataId: number;

  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Syns';
  public windowDesktop = true;
  public hideDash = false;
  public windowMeasure: number;
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.windowMeasure = event.target.innerWidth;
    // console.log(event.target.innerWidth);
    // console.log(event.target.innerHeight);
  }


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (window.innerWidth > 999) {
      this.windowDesktop = true;
      document.getElementById('littleCrumb1').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
      document.getElementById('littleCrumb2').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
    } else {
      this.windowDesktop = false;
    }
  }

  public resizerCheck(event) {
    const windowSize = event.target.innerWidth;
    if (windowSize > 999) {
      this.windowDesktop = true;
      document.getElementById('littleCrumb1').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
      document.getElementById('littleCrumb2').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
    } else {
      this.windowDesktop = false;
    }
  }

  public calculatorFunc() {
    const calCap = this.totalSyns - this.userSyns;
    const Totes = (calCap * 100) / this.totalSyns;
    return Totes - 100;
  }

  public toggle() {
    this.hideDash = !this.hideDash;
  }
}
