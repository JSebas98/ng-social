import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-social-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loginForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    console.log(this.loginForm.get('userEmail')?.value);
    console.log(this.loginForm.get('password')?.value);
  }
}
