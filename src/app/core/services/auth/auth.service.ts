import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDTO } from '../../models/user.models';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

interface UserToken {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN = 'ng-social-auth-token';
  private readonly BASE_URL = 'http://localhost:3000/auth';

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private http: HttpClient
  ) { }

  get token(): string | null {
    const isBrowser: boolean = isPlatformBrowser(this.platformId);
    if (isBrowser) {
      return localStorage.getItem(this.AUTH_TOKEN);
    }

    return null;
  }

  isLoggedIn() {
    const isBrowser: boolean = isPlatformBrowser(this.platformId);
    if (isBrowser) {
      return !!this.token
    }

    return false;
  }

  login(userData: UserDTO): Observable<UserToken> {
    return this.http
      .post<UserToken>(`${this.BASE_URL}/login`, userData)
      .pipe(tap(userToken => this.saveUserToken(userToken.access_token)));
  }

  private saveUserToken(userToken: string) {
    const isBrowser: boolean = isPlatformBrowser(this.platformId);
    if (isBrowser) {
      localStorage.setItem('ng-social-auth-token', userToken);
    }
  }

  signUp(userData: UserDTO) {
    return this.http.post<User>(`${this.BASE_URL}/signup`, userData);
  }
}
