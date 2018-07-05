import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCore} from './_services/http/HttpServiceCore.service';
import {IUserDetails} from './_interfaces/IUserDetails';
// import {IUserStore} from './_store/IUserStore.store';
// import {IUserState} from './_store/IUserState.store';
import {SessionStorageService} from './_store/SessionStorage.service';
import {IUserDietData} from './_interfaces/IUserDietData';
import {ITokenPayload, IUserAuth} from './_interfaces/IUserAuth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public userEmail: FormControl = new FormControl(null, [Validators.required]);
  public userPassword: FormControl = new FormControl(null, [Validators.required]);

  public developmentMode = true;

  public newRegister = false;
  public navStatus: boolean;
  public windowDesktop = false;
  public userPresent = true;
  public emailClicked = false;
  public passwordClicked = false;
  public validLogin = true;
  public credentials = <ITokenPayload>{};

  constructor(
    // public userState: IUserState,
    // public userStore: IUserStore,
    public http: HttpServiceCore,
    public session: SessionStorageService,
    public router: Router
  ) {
  }

  ngOnInit() {

    this.userSetter();

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
    // if (this.userStore.get()) {
    //   this.userPresent = true;
    // } else {
    //   this.userPresent = false;
    // }
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

  public login() {
    this.credentials.email = this.userEmail.value;
    this.credentials.password = this.userPassword.value;
    this.http.login(this.credentials).subscribe(() => {
        this.userSetter();
      }, (err) => {
        console.error(err);
      }, () => {
        this.router.navigateByUrl('/dashboard');
      }
    );
  }

  public userSetter() {
    this.http.profile().subscribe(
      (res: IUserAuth) => {
        this.generateAuthenticationObject(res.dataId);
      }, (err) => {
        console.error(err);
      });
  }

  public generateAuthenticationObject(listId: number) {
    this.session.setUserPresent(true);
    this.http.getUserPersonalDetails(listId).subscribe(
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
