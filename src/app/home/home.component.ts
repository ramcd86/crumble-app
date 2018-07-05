import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
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
    private auth:
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



}
