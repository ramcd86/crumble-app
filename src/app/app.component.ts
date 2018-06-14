import {Component, OnInit} from '@angular/core';
import {UserState} from './_store/user_state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public navStatus: boolean;
  public windowDesktop = false;
  public userPresent = false;

  constructor(
    public userState: UserState
  ) {
  }

  ngOnInit() {

    if (this.userState.DATA_ID && this.userState.USER_NAME) {
      this.userPresent = true;
    } else {
      this.userPresent = false;
    }

//     console.log(this.userState.DATA_ID, this.userState.USER_NAME);
// if (this.userState === {}) {
//   console.log('undefined');
// } else {
//   console.log('defined')
// }

    this.navStatus = false;
    if (window.innerWidth < 767) {
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
