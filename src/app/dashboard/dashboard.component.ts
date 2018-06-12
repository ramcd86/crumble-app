import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  // @HostListener('window:resize', ['$event'])

  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Points';
  // public paddingSetter: any;
  // public window = window.innerWidth;
  public isWindowMobile: boolean;

  // public padding: number;


  constructor(
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    this.userSyns = 0;
    document.getElementById('littleCrumb1').style.paddingTop = this.paddApplier() + 'px';
    document.getElementById('littleCrumb2').style.paddingTop = this.paddApplier() + 'px';
    this.isWindowMobile = false;
    console.log(this.paddApplier());
  }

  //NOT WORKING
  public getBigCrumbHeight(event) {
    const bigCrumb = event.target.innerHeight;
    console.log('bigCrumb :', bigCrumb);
  }
  public getLittleCrumbHeight(event) {
    const littleCrumb = event.target.innerHeight;
    console.log('littleCrumb :', littleCrumb);
  }

  public resizerCheck(event) {
    const windowSize = event.target.innerWidth;
    if (windowSize > 999) {
      this.isWindowMobile = true;
    } else {
      this.isWindowMobile = false;
    }
    console.log('windowsize', windowSize);
  }

  public paddApplier() {
    const OD = document.getElementById('outerDashContainer').clientWidth;
    const ID = document.getElementById('littleCrumb1').clientWidth;
    return OD - ID;
  }

  public calculatorFunc() {
    const calCap = this.totalSyns - this.userSyns;
    const Totes = (calCap * 100) / this.totalSyns;
    return Totes - 100;

  }
}
