import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCore} from './_services/http/HttpServiceCore.service';
import {IUserLogin} from './_interfaces/IUserLogin';
import {IUserDetails} from './_interfaces/IUserDetails';
import {IUserStore} from './_store/IUserStore.store';
import {IUserState} from './_store/IUserState.store';
import {SessionStorageService} from './_store/SessionStorage.service';
import {IDataBaseIteration} from './_interfaces/IDataBaseIteration';
import {IUserDietData} from './_interfaces/IUserDietData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public userEmail: FormControl = new FormControl(null, [Validators.required]);
  public userPassword: FormControl = new FormControl(null, [Validators.required]);

  public userLoginDetails: IUserLogin[];

  public developmentMode = true;

  public newRegister = false;
  public navStatus: boolean;
  public windowDesktop = false;
  public userPresent = false;
  public emailClicked = false;
  public passwordClicked = false;
  public validLogin = true;

  constructor(
    public userState: IUserState,
    public userStore: IUserStore,
    public http: HttpServiceCore,
    public session: SessionStorageService
  ) {
  }

  ngOnInit() {

    console.log(`
    ##################################################
    #################### WARNING #####################
    ##################################################
    #
    # THE CONSOLE IS A FEATURE INTENDED FOR DEVELOPERS.
    # IF SOMEONE HAS ASKED YOU TO GIVE THEM INFORMATION,
    # FROM THIS SCREEN THEN YOU ARE PUTTING YOUR ACCOUNT
    # AT RISK FROM HACKERS. DO NOT SHARE INFORMATION ON
    # THIS SCREEN WITH THIRD PARTIES.
    #
    # THE CRUMBLE TEAM TAKES NO RESPONSIBILITY FOR
    # INFORMATION YOU SHARE FROM THIS DATA SOURCE.
    #
    ##################################################
    #################### WARNING #####################
    ##################################################
    `);

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

  public register() {
    this.newRegister = true;
  }

  // public userLogin() {
  //   this.http.getLoginAuthentication()
  // }

  public login() {
    this.http.getLoginAuthentication(this.userEmail.value, this.userPassword.value).subscribe(
      (res: IUserLogin) => {
        if (res) {
          console.log('Object:', res);
          this.generateAuthenticationObject(res.listId);
        } else {
          this.validLogin = false;
        }
      },
      (err) => {
        console.log(err);
        this.validLogin = false;
      }
    );
  }

  public generateAuthenticationObject(listId: number) {
    // Begin building user session object.
    this.session.setAuth(true);
    this.http.getDatabaseState().subscribe(
      (res: IDataBaseIteration) => {
        this.session.setDbState(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.http.getUserDetails(listId).subscribe(
      (res: IUserDetails) => {
        this.session.setUserDetails(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.http.getUserDietData(listId).subscribe(
      (res: IUserDietData) => {
        this.session.setUserDietData(res);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.session);
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
    this.validLogin = true;
  }

}
