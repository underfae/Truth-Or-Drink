import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'

export function PasswordMatch(password: string, repeatedPassword: string) {
  return (formGroup: FormGroup) => {
    const pass = formGroup.controls[password]
    const repeatedPass = formGroup.controls[repeatedPassword]

    if (pass.value !== repeatedPass.value) {
      repeatedPass.setErrors({ mustMatch: true })
    } else {
      repeatedPass.setErrors(null)
    }
  }
}
