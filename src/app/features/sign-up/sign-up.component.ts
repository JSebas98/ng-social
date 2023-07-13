import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'ng-social-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signUp() {
    const userData: UserDTO = this.getUserData();
    this.authService.signUp(userData).subscribe({
      next: () => this.router.navigate(['/login']),
    });
  }

  private getUserData(): UserDTO {
    const userData: UserDTO = {
      username: this.signUpForm.get('userEmail')?.value,
      password: this.signUpForm.get('password')?.value
    }
    
    return userData;
  }

}
