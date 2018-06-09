import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Syns';

  constructor(
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Crumbs - Home');
    this.userSyns = 0;
  }

  public calculatorFunc() {
    const calCap = this.totalSyns - this.userSyns;
    const Totes = (calCap * 100) / this.totalSyns;
    return Totes;
    // return Math.floor(this.totalSyns / this.userSyns) * 100;
    // return Math.floor(this.userSyns / this.totalSyns);
  }


}
