import {Injectable} from '@angular/core';

@Injectable()
export class IUserStore {

  public userData = {
    username: null,
    data_id: null
  };

  public put(username, data_id) {
    this.userData.username = username;
    this.userData.data_id = data_id;
  }

  public get() {
    if (this.userData.username && this.userData.data_id) {
      return this.userData;
    } else {
      return null;
    }
  }

}
