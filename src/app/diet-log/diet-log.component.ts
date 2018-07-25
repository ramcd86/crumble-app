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

  constructor(
    private titleService: Title,
    private session: SessionStorageService
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Crumbs - Diet Log');
    this.userDetails = this.session.getUserDetails();
  }

}
