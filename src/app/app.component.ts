import {Component, OnInit} from '@angular/core';
import {UserState} from './_store/user_state';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCore} from './_services/http/HttpServiceCore';
import {IUserLogin} from './_interfaces/IUserLogin';
import {IUserDetails} from './_interfaces/IUserDetails';
import {IUserStore} from './_store/IUserStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public userEmail: FormControl = new FormControl(null, [Validators.required]);
  public userPassword: FormControl = new FormControl(null, [Validators.required]);

  public userLoginDetails: IUserLogin[];

  public navStatus: boolean;
  public windowDesktop = false;
  public userPresent = false;
  public emailClicked = false;
  public passwordClicked = false;

  constructor(
    public userState: UserState,
    public userStore: IUserStore,
    public http: HttpServiceCore
  ) {
  }

  ngOnInit() {

    this.userEmail.setValue('Email Address');
    this.userPassword.setValue('1234567890');
    if (this.userStore.get()) {
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
    this.http.getLoginAuthentication(this.userEmail.value, this.userPassword.value).subscribe(
      (res: IUserLogin[]) => {
        if (res.length > 0) {
          const id = res[0].data_Id;
          this.generateAuthenticationObject(id);
        } else {
          console.log('Nope');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public generateAuthenticationObject(data_id) {
    this.userState.DATA_ID = data_id;
    this.http.getUserDetails(data_id).subscribe(
      (res: IUserDetails) => {
        this.userState.USER_NAME = res.userName;
        this.userStore.put(res.userName, data_id);
        console.log('store: ', this.userStore.get());
        this.userPresent = true;
        console.log(this.userState);
      },
      (err) => {
        console.log(err);
      }
    );
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
