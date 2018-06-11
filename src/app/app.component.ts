import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public navStatus: boolean;

  constructor() {
  }

  ngOnInit() {
    this.navStatus = false;
  }

  public toggleNav(): boolean {
    this.navStatus = !this.navStatus;
    return false;
  }

}
