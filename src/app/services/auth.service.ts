import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(username: string, email: string, password: string, repeatedPassword: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/auth/register`, {
      username,
      email,
      password,
      repeated_password: repeatedPassword,
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/auth/login`, {
      email,
      password,
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
}
