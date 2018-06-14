import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpServiceCore} from '../_services/http/HttpServiceCore';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('littleCrumb') public littleCrumb: ElementRef;
  @ViewChild('bigCrumb') public bigCrumb: ElementRef;

  @Input() public dataId: number;

  public userDetails: IUserDetails[];
  public userDietData: IUserDietData[];
  public userDetailsObject = <IUserDetails>{};

  public totalSyns = 25;
  public userSyns: number;
  public dietDeficitType = 'Syns';
  public windowDesktop = true;
  public hideDash = false;

  // public dataId;

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpServiceCore,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {

    console.log(this.dataId);

    this.userSyns = 0;
    this.getUserDetails();
    this.getUserDietData();
    // this.postUserDetails();
  }

  ngAfterViewInit() {
    if (window.innerWidth > 999) {
      this.windowDesktop = true;
      document.getElementById('littleCrumb1').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
      document.getElementById('littleCrumb2').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
    } else {
      this.windowDesktop = false;
    }
  }

  public getUserDetails() {
    this.http.getUserDetails().subscribe(
      (data) => {
        this.userDetails = data;
        console.log('New User Details: ', this.userDetails);
        console.log(this.userDetails[0].email);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public getUserDietData() {
    this.http.getUserDietData().subscribe(
      (data) => {
        this.userDietData = data;
        console.log('New User Diet Data: ', this.userDietData);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public postUserDetails() {
    this.userDetailsObject.email = 'ra_mcd@yahoo.com';
    this.userDetailsObject.age = 32;
    this.http.postUserDetails(this.userDetailsObject).subscribe(
      (res) => {
        console.log(res);
        this.getUserDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public resizerCheck(event) {
    const windowSize = event.target.innerWidth;
    if (windowSize > 999) {
      this.windowDesktop = true;
      document.getElementById('littleCrumb1').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
      document.getElementById('littleCrumb2').style.paddingTop = (
        (this.bigCrumb.nativeElement.clientWidth - this.littleCrumb.nativeElement.clientWidth)).toString() + 'px';
    } else {
      this.windowDesktop = false;
    }
  }

  public calculatorFunc() {
    const calCap = this.totalSyns - this.userSyns;
    const Totes = (calCap * 100) / this.totalSyns;
    return Totes - 100;
  }

  public toggle() {
    this.hideDash = !this.hideDash;
  }
}
