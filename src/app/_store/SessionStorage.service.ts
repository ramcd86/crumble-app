import {Injectable} from '@angular/core';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SessionStorageService {


  public userDetails = <IUserDetails>{};
  public userDietData = <IUserDietData>{};
  public userPresent = false;
  public newRegister = false;
  public listId: number;

  public exposeUserDetails: Subject<IUserDetails> = new Subject<IUserDetails>();
  public exposeUserDietData: Subject<IUserDietData> = new Subject<IUserDietData>();
  public exposeListId: Subject<number> = new Subject<number>();
  public exposeUserPresent: Subject<boolean> = new Subject<boolean>();
  // public completeStatus: Subject<boolean> = new Subject<boolean>();

  constructor(
    // public userManagement: UserManagementService
  ) {

  }

  public inputUserDetails(value: IUserDetails) {
    this.exposeUserDetails.next(value);
  }
  public pipeUserDetails(): Observable <IUserDetails> {
    return this.exposeUserDetails.asObservable();
  }
  public inputUserDietData(value: IUserDietData) {
    this.exposeUserDietData.next(value);
  }
  public pipeUserDietData(): Observable <IUserDietData> {
    return this.exposeUserDietData.asObservable();
  }
  public inputUserPresent(value: boolean) {
    this.exposeUserPresent.next(value);
  }
  public pipeUserPresent(): Observable <boolean> {
    return this.exposeUserPresent.asObservable();
  }
  public inputListId(value: number) {
    this.exposeListId.next(value);
  }
  public pipeListId(): Observable <number> {
    return this.exposeListId.asObservable();
  }

  public setUserPresent(value) {
    this.userPresent = value;
  }

  public setUserDetails(details: IUserDetails) {
    this.userDetails = details;
  }

  public setUserDietData(dietData: IUserDietData) {
    this.userDietData = dietData;
  }

  public setListId(value) {
    this.listId = value;
  }


  public getListId() {
    return this.listId;
  }

  public setNewRegister(value) {
    this.newRegister = value;
  }

  public getNewRegister() {
    return this.newRegister;
  }



  // Expose User Details properties.
  public getUserPresentStatus() {
    return this.userPresent;
  }

  public getDetailsId() {
    return this.userDetails.listId;
  }

  public getDetailsEmail() {
    return this.userDetails.email;
  }

  public getDetailsUserName() {
    return this.userDetails.userName;
  }

  public getDetailsStartingWeight() {
    return this.userDetails.startingWeight;
  }

  public getDetailsCurrentWeight() {
    return this.userDetails.currentWeight;
  }

  public getDetailsWeightHistory() {
    return this.userDetails.weightHistory;
  }

  public getDetailsHeight() {
    return this.userDetails.height;
  }

  public getDetailsAge() {
    return this.userDetails.age;
  }

  public getUserDetails() {
    return this.userDetails;
  }

// Expose diet data.
  public getDietDataId() {
    return this.userDietData.listId;
  }

  public getDietDataBigCrumbCustom() {
    return this.userDietData.bigCrumbCustom;
  }

  public getDietDataBigCrumbDefault() {
    return this.userDietData.bigCrumbDefault;
  }

  public getDietDataBigCrumbCustomType() {
    return this.userDietData.bigCrumbCustomType;
  }

  public getDietDataBigCrumbCustomMaxValue() {
    return this.userDietData.bigCrumbCustomMaxValue;
  }

  public setDietDataBigCrumbCustomMaxValue(value) {
    this.userDietData.bigCrumbCustomMaxValue = value;
  }

  public getDietDataBigCrumbUserSetValue() {
    return this.userDietData.bigCrumbUserSetValue;
  }

  public setDietDataBigCrumbUserSetValue(value) {
    this.userDietData.bigCrumbUserSetValue = value;
  }

  public getDietDataBigCrumbHistory() {
    return this.userDietData.bigCrumbHistory;
  }

  public getDietDataLittleCrumb1Custom() {
    return this.userDietData.littleCrumb1Custom;
  }

  public getDietDataLittleCrumb1Default() {
    return this.userDietData.littleCrumb1Default;
  }

  public getDietDataLittleCrumb1CustomType() {
    return this.userDietData.littleCrumb1CustomType;
  }

  public getDietDataLittleCrumb1CustomMaxValue() {
    return this.userDietData.littleCrumb1CustomMaxValue;
  }

  public getDietDataLittleCrumb1UserSetValue() {
    return this.userDietData.littleCrumb1UserSetValue;
  }

  public getDietDataLittleCrumb1History() {
    return this.userDietData.littleCrumb1History;
  }

  public getDietDataLittleCrumb2Custom() {
    return this.userDietData.littleCrumb2Custom;
  }

  public getDietDataLittleCrumb2Default() {
    return this.userDietData.littleCrumb2Default;
  }

  public getDietDataLittleCrumb2CustomType() {
    return this.userDietData.littleCrumb2CustomType;
  }

  public getDietDataLittleCrumb2CustomMaxValue() {
    return this.userDietData.littleCrumb2CustomMaxValue;
  }

  public getDietDataLittleCrumb2UserSetValue() {
    return this.userDietData.littleCrumb2UserSetValue;
  }

  public getDietDataLittleCrumb2History() {
    return this.userDietData.littleCrumb2History;
  }

  public getDietDataLittleCrumb3Custom() {
    return this.userDietData.littleCrumb3Custom;
  }

  public getDietDataLittleCrumb3Default() {
    return this.userDietData.littleCrumb3Default;
  }

  public getDietDataLittleCrumb3CustomType() {
    return this.userDietData.littleCrumb3CustomType;
  }

  public getDietDataLittleCrumb3CustomMaxValue() {
    return this.userDietData.littleCrumb3CustomMaxValue;
  }

  public getDietDataLittleCrumb3UserSetValue() {
    return this.userDietData.littleCrumb3UserSetValue;
  }

  public getDietDataLittleCrumb3History() {
    return this.userDietData.littleCrumb3History;
  }

  public getDietDataLittleCrumb4Custom() {
    return this.userDietData.littleCrumb4Custom;
  }

  public getDietDataLittleCrumb4Default() {
    return this.userDietData.littleCrumb4Default;
  }

  public getDietDataLittleCrumb4CustomType() {
    return this.userDietData.littleCrumb4CustomType;
  }

  public getDietDataLittleCrumb4CustomMaxValue() {
    return this.userDietData.littleCrumb4CustomMaxValue;
  }

  public getDietDataLittleCrumb4UserSetValue() {
    return this.userDietData.littleCrumb4UserSetValue;
  }

  public getDietDataLittleCrumb4History() {
    return this.userDietData.littleCrumb4History;
  }

  public getDietDataLittleCrumb5Custom() {
    return this.userDietData.littleCrumb5Custom;
  }

  public getDietDataLittleCrumb5Default() {
    return this.userDietData.littleCrumb5Default;
  }

  public getDietDataLittleCrumb5CustomType() {
    return this.userDietData.littleCrumb5CustomType;
  }

  public getDietDataLittleCrumb5CustomMaxValue() {
    return this.userDietData.littleCrumb5CustomMaxValue;
  }

  public getDietDataLittleCrumb5UserSetValue() {
    return this.userDietData.littleCrumb5UserSetValue;
  }

  public getDietDataLittleCrumb5History() {
    return this.userDietData.littleCrumb5History;
  }

  public getDietData() {
    return this.userDietData;
  }

  // public updateUserDietData() {
  //   this.userManagement.putUserDietData(this.userDietData);
  // }
  //
  // public updateUserDetails() {
  //   this.userManagement.putUserDetails(this.userDetails);
  // }

}
