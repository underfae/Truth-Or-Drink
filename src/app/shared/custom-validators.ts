import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static checkPasswords: ValidatorFn = (form: FormGroup):  ValidationErrors | null => {
    let password = form.controls.password.value;
    let newPassword = form.controls.newPassword.value;

    return password === newPassword ? null : { 'notSame': true }
  }
}


