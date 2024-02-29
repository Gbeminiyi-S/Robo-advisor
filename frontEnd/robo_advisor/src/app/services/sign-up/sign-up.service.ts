import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../../models/interfaces/SignUp';
import { Observable, catchError, throwError } from 'rxjs';
import { USER_BASE_URL } from '../../config/signUp.config';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {}

  signUp(signUpData: SignUp): Observable<any> {
    return this.http.post(`${USER_BASE_URL}/users/register`, signUpData)
  }

  
}
