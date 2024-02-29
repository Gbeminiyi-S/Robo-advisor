import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/interfaces/Login';
import { Observable } from 'rxjs';
import { USER_BASE_URL } from '../../config/signUp.config';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginData: Login): Observable<any> {
    return this.http.post(`${USER_BASE_URL}/users/login`, loginData);
  }
}
