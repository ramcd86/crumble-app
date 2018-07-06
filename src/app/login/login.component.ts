import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpServiceCore} from '../_services/http/HttpServiceCore.service';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {ITokenPayload, IUserAuth} from '../_interfaces/IUserAuth';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {FormControl, Validators} from '@angular/forms';
// import {IUserStore} from '../_store/IUserStore.store';


@Component({
  selector: 'app-home',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  public userEmail: FormControl = new FormControl(null, [Validators.required]);
  public userPassword: FormControl = new FormControl(null, [Validators.required]);

  public dataId: number;
  public newRegister = false;
  public navStatus: boolean;
  public windowDesktop = false;
  // public userPresent = true;
  public emailClicked = false;
  public passwordClicked = false;
  public validLogin = true;
  public credentials = <ITokenPayload>{};
  public token: string = 'empty';

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpServiceCore,
    private session: SessionStorageService
    // private auth:
    // private userStore: IUserStore
  ) {
  }

  ngOnInit() {
    // this.route.params.subscribe(
    //   params => {
    //     this.dataId = params['userData.DATA_ID'];
    //   });
    // this.titleService.setTitle('Crumbs - Home');
    // console.log('aslo store: ', this.userStore.get().data_id);
  }

  public register() {
    this.router.navigateByUrl('/register');
  }

  public login() {
    this.credentials.email = this.userEmail.value;
    this.credentials.password = this.userPassword.value;
    this.http.login(this.credentials).subscribe(() => {
        this.userSetter();
      }, (err) => {
        console.error(err);
      }, () => {
        this.router.navigateByUrl('/home');
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
