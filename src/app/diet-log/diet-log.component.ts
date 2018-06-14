import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-diet-log',
  templateUrl: './diet-log.component.html',
  styleUrls: ['./diet-log.component.css']
})
export class DietLogComponent implements OnInit {

  public dataId: any;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.dataId = +params.data_id;
        console.log(params);
      });
  }

}
