import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html'
})
export class DashboardModalComponent implements OnInit {

  @Input() showWindow = false;

  constructor() {

  }

  ngOnInit() {

  }

}
