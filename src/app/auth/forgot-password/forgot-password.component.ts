import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MyErrorStateMatcher } from '../../shared/helpers/form.helper'
import { PasswordMatch } from '../../shared/custom-validators'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup
  matcher = new MyErrorStateMatcher()

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        newPassword: ['', Validators.required],
      },
      {
        validator: PasswordMatch('password', 'newPassword'),
      },
    )
  }

  onReset(): void {}
}
