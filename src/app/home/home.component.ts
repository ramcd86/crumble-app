import {Component, OnInit, HostListener} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {HttpServiceCore} from '../_services/http/http-service-core.service';
import {IUserAuth} from '../_interfaces/IUserAuth';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {DataManagerService} from '../_services/data-manager.service';
import {Subscription} from 'rxjs/Subscription';
import {Session} from 'selenium-webdriver';
import {UserManagementService} from '../_services/user-management.service';

// import {IUserStore} from '../_store/IUserStore.store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  public dataId: number;
  public subUserDetails: Subscription;
  public subUserDietData: Subscription;
  public userDetails = <IUserDetails>{};
  public userDietData = <IUserDietData>{};
  public averageState = 'about where you should be.';
  public average: number;


  // @HostListener('window:resize', ['$event']) onResize(event) {
  //   console.log(event.target.innerWidth);
  //   console.log(event.target.innerHeight);
  // }


  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private session: SessionStorageService,
    private http: HttpServiceCore,
    private dataManager: DataManagerService,
    private user: UserManagementService
  ) {
    // if (this.user.archiveProcess()) {
    //
    // }
    this.subUserDetails = this.session.pipeUserDetails().subscribe(
      (res) => {
        this.userDetails = res;
        this.titleService.setTitle(`Crumbs - ${res.userName}.`);
      }
    );
    this.subUserDietData = this.session.pipeUserDietData().subscribe(
      (res) => {
        this.userDietData = res;
        this.calcAverageBigCrumb(res.bigCrumbHistory);
        console.log('history: ', this.userDietData.bigCrumbHistory);
      }
    );
  }

  ngOnInit() {
    this.dataManager.setUp();
  }

  public calcAverageBigCrumb(array) {
    const average = (this.userDietData.bigCrumbUserSetValue + array[0] + array[1] + array[2] + array[3] + array[4] + array[5]) / 7;
    if (average > this.userDietData.bigCrumbCustomMaxValue) {
      this.averageState = 'a bit above where you should be.';
    } else if (average < this.userDietData.bigCrumbCustomMaxValue) {
      this.averageState = 'a bit below where you should be.';
    }
    this.average = Math.round(average);
  }

}
