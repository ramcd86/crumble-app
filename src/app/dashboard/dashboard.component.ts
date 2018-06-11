import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Points';
  public paddingSetter: any;

  // public padding: number;


  constructor(
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    this.userSyns = 0;
    document.getElementById('littleCrumb').style.paddingTop = this.paddApplier() + 'px';
    // this.paddApplier();
    // this.binder();
  }

  public paddApplier() {
    return (document.getElementById('outerDashContainer').clientHeight - document.getElementById('littleCrumb').clientHeight);
  }

  public binder() {
    document.getElementById('littleCrumb').style.paddingTop = this.paddingSetter;
  }

  public calculatorFunc() {
    const calCap = this.totalSyns - this.userSyns;
    const Totes = (calCap * 100) / this.totalSyns;
    return Totes - 100;

  }
}
