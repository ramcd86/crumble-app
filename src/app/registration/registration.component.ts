import { Component, OnInit } from '@angular/core';
import {IUserState} from '../_store/IUserState.store';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCoreService} from '../_services/http/HttpServiceCore.service';
import {IUserLogin} from './../_interfaces/IUserLogin';
import {IUserDetails} from './../_interfaces/IUserDetails';
import {IUserStore} from '../_store/IUserStore.store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  public validDetails = true;

  constructor() { }

  ngOnInit() {
  }

}
