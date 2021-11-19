import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { PasswordMatch } from '../../shared/custom-validators'
import { MyErrorStateMatcher } from '../../shared/helpers/form.helper'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  matcher = new MyErrorStateMatcher()

  constructor(private formBuilder: FormBuilder, protected router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: PasswordMatch('password', 'confirmPassword'),
      },
    )
  }

  onRegister(): void {
    console.log(this.form.value)
  }
  openLogin() {
    this.router.navigateByUrl('auth')
  }
}
