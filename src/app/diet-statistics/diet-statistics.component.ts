import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-diet-statistics',
  templateUrl: './diet-statistics.component.html'
})
export class DietStatisticsComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Crumbs - Diet Statistics');
  }

}
