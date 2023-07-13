import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDTO } from '../../models/user.models';
import { Observable } from 'rxjs';

interface UserToken {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN = 'ng-social-super-secret-token-2023';
  private readonly BASE_URL = 'http://localhost:3000/auth';

  constructor(
    private http: HttpClient
  ) { }

  isLoggedIn() {
    return true;
  }

  login(userData: UserDTO): Observable<UserToken> {
    return this.http.post<UserToken>(`${this.BASE_URL}/login`, userData);
  }

  signUp(userData: UserDTO) {
    return this.http.post<User>(`${this.BASE_URL}/signup`, userData);
  }
}
