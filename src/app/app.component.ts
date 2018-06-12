import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public navStatus: boolean;
  public windowDesktop = false;

  constructor() {
  }

  ngOnInit() {
    this.navStatus = false;
    if(window.innerWidth < 767) {
      this.windowDesktop = true;
    } else {
      this.windowDesktop = false;
    }
  }

  public toggleNav(): boolean {
    this.navStatus = !this.navStatus;
    return false;
  }

}
