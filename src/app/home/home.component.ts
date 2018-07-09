import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {HttpServiceCore} from '../_services/http/HttpServiceCore.service';
import {IUserAuth} from '../_interfaces/IUserAuth';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserDetails} from '../_interfaces/IUserDetails';

// import {IUserStore} from '../_store/IUserStore.store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public dataId: number;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private session: SessionStorageService,
    private http: HttpServiceCore,
  ) {
  }

  ngOnInit() {
    this.userSetter();
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


}
