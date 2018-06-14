import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataId: number;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.dataId = params['userData.DATA_ID'];
      });
    this.titleService.setTitle('Crumbs - Home');
  }



}
