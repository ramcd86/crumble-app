import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {UserState} from '../_store/user_state';
import {IUserStore} from '../_store/IUserStore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataId: number;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private userStore: IUserStore
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.dataId = params['userData.DATA_ID'];
      });
    this.titleService.setTitle('Crumbs - Home');
    console.log('aslo store: ', this.userStore.get().data_id);
  }



}
