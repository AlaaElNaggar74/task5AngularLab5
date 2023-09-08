import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { matchpassword } from 'src/matchPassword.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(public fb: FormBuilder, public _router: Router) {}

  userForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,4}$'),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    { validators: matchpassword }
  );

  submitUserForm() {
    console.log(this.userForm);
    this._router.navigate(['/signin']);
  }
}
