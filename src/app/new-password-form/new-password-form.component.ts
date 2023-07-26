import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OlderPassworChecker } from '../new-course-form/oldpassword.validators';

@Component({
  selector: 'app-new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css'],
})
export class NewPasswordFormComponent {
  form;
  changePassword() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }
  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassWordGroup.newPassword');
  }
  get confirmPassword() {
    return this.form.get('newPassWordGroup.confirmPassword');
  }
  log() {
    console.log(this.confirmPassword);
  }
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: [
        '',
        Validators.required,
        OlderPassworChecker.oldPassworNotCorrect,
      ],
      newPassWordGroup: fb.group({
        newPassword: ['', Validators.required],
        confirmPassword: [
          '',
          [Validators.required, OlderPassworChecker.differentToNewPassword],
        ],
      }),
    });
  }
}
