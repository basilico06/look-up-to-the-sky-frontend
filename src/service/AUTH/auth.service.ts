import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  Cookie  from 'cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    login(email: string, password: string) {
        const url = 'http://localhost:4000/auth/login';
        return this.http.post(url, { email, password });
    }

    async verifyToken(token: string) {
        const url = 'http://localhost:4000/auth/verify';
        return await this.http.post(url, { token }).toPromise();
    }

    async isLoggedIn() {
      if (Cookie('token') !== '') {
        return await this.verifyToken(cookie.get('token'))
      }
      else
      {
        return false;
      }
    }
}
