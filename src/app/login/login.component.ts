import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpServiceCore} from '../_services/http/http-service-core.service';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {ITokenPayload, IUserAuth} from '../_interfaces/IUserAuth';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {FormControl, Validators} from '@angular/forms';
import {UserManagementService} from '../_services/user-management.service';


@Component({
  selector: 'app-home',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  public userEmail: FormControl = new FormControl(null, [Validators.required]);
  public userPassword: FormControl = new FormControl(null, [Validators.required]);

  public dataId: number;
  public emailClicked = false;
  public passwordClicked = false;
  public validLogin = true;
  public credentials = <ITokenPayload>{};

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpServiceCore,
    private session: SessionStorageService,
    private userManagement: UserManagementService
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Crumbs - Login');
  }

  public register() {
    this.router.navigateByUrl('/register');
  }

  public login() {
    this.credentials.email = this.userEmail.value;
    this.credentials.password = this.userPassword.value;
    this.http.login(this.credentials).subscribe(() => {
        this.userManagement.construct();
      }, (err) => {
        console.error(err);
        console.log('It\'s fucked');
      }, () => {
        this.router.navigateByUrl('/home');
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


  public resetFields() {
    this.userEmail.setValue('Email Address');
    this.userPassword.setValue('1234567890');
    this.emailClicked = false;
    this.passwordClicked = false;
    this.validLogin = true;
  }

}
