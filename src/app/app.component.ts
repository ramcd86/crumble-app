import {Component, OnInit} from '@angular/core';
import {UserState} from './_store/user_state';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public userEmail: FormControl = new FormControl(null, [Validators.required]);
  public userPassword: FormControl = new FormControl(null, [Validators.required]);

  public navStatus: boolean;
  public windowDesktop = false;
  public userPresent = false;
  public emailClicked = false;
  public passwordClicked = false;

  constructor(
    public userState: UserState
  ) {
  }

  ngOnInit() {

    this.userEmail.setValue('Email Address');
    this.userPassword.setValue('1234567890');
    if (this.userState.DATA_ID && this.userState.USER_NAME) {
      this.userPresent = true;
    } else {
      this.userPresent = false;
    }
    this.navStatus = false;
    if (window.innerWidth < 767) {
      this.windowDesktop = true;
    } else {
      this.windowDesktop = false;
    }

  }

  public login() {

  }

  public tapEmail() {
    if (this.emailClicked === false) {
      this.userEmail.setValue('');
      this.emailClicked = true;
    } else if (this.emailClicked === true) {
      this.userEmail.setValue(this.userEmail.value);
    }
  }

  public tapPassword() {
    if (this.passwordClicked === false) {
      this.userPassword.setValue('');
      this.passwordClicked = true;
    } else if (this.passwordClicked === true) {
      this.userPassword.setValue(this.userPassword.value);
    }
  }

  public toggleNav(): boolean {
    this.navStatus = !this.navStatus;
    return false;
  }

  public resetFields() {
    this.userEmail.setValue('Email Address');
    this.userPassword.setValue('1234567890');
    this.emailClicked = false;
    this.passwordClicked = false;
  }

}
