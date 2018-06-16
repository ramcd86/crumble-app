import { Component, OnInit } from '@angular/core';
import {UserState} from './../_store/user_state';
import {FormControl, Validators} from '@angular/forms';
import {HttpServiceCore} from './../_services/http/HttpServiceCore';
import {IUserLogin} from './../_interfaces/IUserLogin';
import {IUserDetails} from './../_interfaces/IUserDetails';
import {IUserStore} from './../_store/IUserStore';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public validDetails = true;

  constructor() { }

  ngOnInit() {
  }

}
