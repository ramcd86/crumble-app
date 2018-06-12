import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
// import {HostListener} from '@angular/core';

const LITTLE_CRUMBS = ['\'littleCrumb1\'', '\'littleCrumb2\'', '\'littleCrumb3\'', '\'littleCrumb4\'', '\'littleCrumb5\''];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('littleCrumb') public littleCrumb: ElementRef;
  @ViewChild('bigCrumb') public bigCrumb: ElementRef;

  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Points';
  public windowDesktop = true;

  constructor(
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    this.userSyns = 0;
  }
  ngAfterViewInit() {
    if (window.innerWidth > 999) {
      this.windowDesktop = true;
      document.getElementById('littleCrumb1').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth) / 2).toString() + 'px';
      document.getElementById('littleCrumb2').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth) / 2).toString() + 'px';
    } else {
      this.windowDesktop = false;
    }
  }
  public resizerCheck(event) {
    const windowSize = event.target.innerWidth;
    if (windowSize > 999) {
      this.windowDesktop = true;
      document.getElementById('littleCrumb1').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth) / 2).toString() + 'px';
      document.getElementById('littleCrumb2').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth) / 2).toString() + 'px';
    } else {
      this.windowDesktop = false;

    }

  }

  public calculatorFunc() {
    const calCap = this.totalSyns - this.userSyns;
    const Totes = (calCap * 100) / this.totalSyns;
    return Totes - 100;

  }
}
