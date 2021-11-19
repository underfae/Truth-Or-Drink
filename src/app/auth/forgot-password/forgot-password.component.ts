import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/custom-validators';

import { MyErrorStateMatcher } from '../../shared/helpers/form.helper';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  matcher = new MyErrorStateMatcher();


  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl('', [Validators.required]),
    }, { validators: CustomValidators.checkPasswords });
  }

  onReset(): void {
    console.log(this.form?.hasError('notSame'));
    if (this.form.invalid) {
      console.log('invalid');
    }
  }

}
