import {Component, OnInit, HostListener} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {HttpServiceCore} from '../_services/http/http-service-core.service';
import {IUserAuth} from '../_interfaces/IUserAuth';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {DataManagerService} from '../_services/data-manager.service';

// import {IUserStore} from '../_store/IUserStore.store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  public dataId: number;


  @HostListener('window:resize', ['$event']) onResize(event) {
    console.log(event.target.innerWidth);
    console.log(event.target.innerHeight);
  }


  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private session: SessionStorageService,
    private http: HttpServiceCore,
    private dataManager: DataManagerService
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle(`Crumbs - ${this.session.getDetailsUserName()}.`);
    // this.userSetter();
    // console.log(this.onResize());
    this.dataManager.setUp();
  }
  //
  // public userSetter() {
  //   this.http.profile().subscribe(
  //     (res: IUserAuth) => {
  //       this.generateAuthenticationObject(res.dataId);
  //     }, (err) => {
  //       console.error(err);
  //     });
  // }
  //
  // public generateAuthenticationObject(listId: number) {
  //   this.session.setUserPresent(true);
  //   this.http.getUserPersonalDetails(listId).subscribe(
  //     (res: IUserDetails) => {
  //       this.session.setUserDetails(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  //   this.http.getUserDietData(listId).subscribe(
  //     (res: IUserDietData) => {
  //       this.session.setUserDietData(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  //   console.log(this.session);
  // }


}
