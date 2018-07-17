import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html'
})
export class DashboardModalComponent implements OnInit {

  @Input() showWindow = false;

  @Output() public modalClose = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public closeMe() {
    this.modalClose.emit();
  }

}
