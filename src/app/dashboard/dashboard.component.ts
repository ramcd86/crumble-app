import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Syns';


  constructor() {
  }

  ngOnInit() {
    this.userSyns = 0;
  }


  public calculatorFunc() {
    const calCap = this.totalSyns - this.userSyns;
    const Totes = (calCap * 100) / this.totalSyns;
    return Totes - 100;

  }
}
