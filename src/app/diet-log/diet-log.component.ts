import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {SessionStorageService} from '../_store/SessionStorage.service';
import {IUserDetails} from '../_interfaces/IUserDetails';

@Component({
  selector: 'app-diet-log',
  templateUrl: './diet-log.component.html'
})
export class DietLogComponent implements OnInit {

  public userDetails = <IUserDetails>{};
  public array = ['DATE1_@_BLOG1', 'DATE2_@_BLOG2',  'DATE3_@_BLOG3',  'DATE4_@_BLOG4'];
  public dateHolder = [];
  public blogHolder = [];

  constructor(
    private titleService: Title,
    private session: SessionStorageService
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Crumbs - Diet Log');
    this.userDetails = this.session.getUserDetails();
    this.splitBlog();
  }

  public splitBlog() {
    let holderArray = this.array;
    for (let i = 0; i < holderArray.length; i ++) {
    let splitArray = [];
    splitArray = holderArray[i].split('_@_');
    this.dateHolder.push(splitArray[0]);
    this.blogHolder.push(splitArray[1]);
    }
    console.log('dateholder: ', this.dateHolder);
    console.log('blogholder: ', this.blogHolder);
  }

}
