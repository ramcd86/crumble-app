import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpServiceCore} from '../_services/http/http-service-core.service';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {ITokenPayload} from '../_interfaces/IUserAuth';
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
  public inputTypeReturn = 'text';
  // public loginFailure = false;

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
    this.inputType('text');
    this.titleService.setTitle('Crumbs - Login');
    this.userEmail.setValue('User Email');
    this.userPassword.setValue('User Password');
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
        this.validLogin = false;
      }, () => {
        this.router.navigateByUrl('/home');
        this.validLogin = true;
      }
    );
  }

public inputType(value: string) {
    this.inputTypeReturn = value;
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
      this.inputType('password');
      this.userPassword.setValue('');
      this.passwordClicked = true;
    } else if (this.passwordClicked === true) {
      this.userPassword.setValue(this.userPassword.value);
    }
  }


  public resetFields() {
    this.inputType('text');
    this.userEmail.setValue('User Address');
    this.userPassword.setValue('User Password');
    this.emailClicked = false;
    this.passwordClicked = false;
    this.validLogin = true;
  }

}
