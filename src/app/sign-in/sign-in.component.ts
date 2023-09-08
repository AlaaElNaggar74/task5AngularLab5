import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(public _router: Router) {}

  submitGameForm(form: any) {
    console.log(form);
  }

  bckHome() {
    this._router.navigate(['home']);
  }
}