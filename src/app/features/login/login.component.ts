import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserDTO } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'ng-social-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  private unsubscribe$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    const userData: UserDTO = this.getUserData();
    this.authService
      .login(userData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.log(err),
      });
  }

  private getUserData(): UserDTO {
    const userData: UserDTO = {
      username: this.loginForm.get('userEmail')?.value,
      password: this.loginForm.get('password')?.value
    };

    return userData;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
