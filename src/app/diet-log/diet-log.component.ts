import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-diet-log',
  templateUrl: './diet-log.component.html'
})
export class DietLogComponent implements OnInit {

  public dataId: any;

  constructor(
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Crumbs - Diet Log');
  }

}
