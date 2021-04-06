import { FormControl } from '@angular/forms';
import { ValidationResult } from './validation-result.interface';

export class PasswordValidator {
  public static strongRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,}$/;

  public static strong(control: FormControl): ValidationResult {
    if (control.pristine) {
      return;
    }

    if (!PasswordValidator.strongRegExp.test(control.value)) {
      return { invalidPassword : true };
    }

    return;
  }
}
