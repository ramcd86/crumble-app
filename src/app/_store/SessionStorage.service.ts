// Storage service SETS objects on successful login, GETS existing states, MODIFIES existing states.
// Objects in completed state are posted to API.

import {Injectable} from '@angular/core';
import {IDataBaseIteration} from '../_interfaces/IDataBaseIteration';
import {IUserLogin} from '../_interfaces/IUserLogin';
import {IUserDetails} from '../_interfaces/IUserDetails';
import {IUserDietData} from '../_interfaces/IUserDietData';

@Injectable()
export class SessionStorageService {


  // Set user-defined objects.
  public dbState = <IDataBaseIteration>{};
  public userLoginDetails = <IUserLogin>{};
  public userDetails = <IUserDetails>{};
  public userDietData = <IUserDietData>{};

  // Build user-defined objects.
  public setDbState(dbState: IDataBaseIteration) {
    this.dbState = dbState;
  }

  public setUserLoginState(loginState: IUserLogin) {
    this.userLoginDetails = loginState;
  }

  public setUserDetails(details: IUserDetails) {
    this.userDetails = details;
  }

  public setUserDietData(dietData: IUserDietData) {
    this.userDietData = dietData;
  }

  // Expose DB State Properties.
  public getDbId() {
    return this.dbState.listId;
  }

  public getDbStateIteration() {
    return this.dbState.dbState;
  }

  public getFullDbState() {
    return this.dbState;
  }

  // Expose User Details properties.
  public getDetailsId() {
    return this.userDetails.listId;
  }

  public getDetailsEmail() {
    return this.userDetails.email;
  }

  public getDetailsFirstName() {
    return this.userDetails.firstName;
  }

  public getDetailsLastName() {
    return this.userDetails.lastName;
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

// GET DIET DATA
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

  public getDietDataBigCrumbUserSetValue() {
    return this.userDietData.bigCrumbUserSetValue;
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

}
