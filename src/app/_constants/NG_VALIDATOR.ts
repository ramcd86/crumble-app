import {FormControl} from '@angular/forms';

export class NG_VALIDATOR {
  public emailValidation(control: FormControl) {
    const failureError = 'Invalid email.';
    const email = control.value;
    if (email && email.indexOf('@') !== -1) {
      return failureError;
    }
    return null;
  }
}
