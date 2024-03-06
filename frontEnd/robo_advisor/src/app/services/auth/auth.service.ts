import { Injectable } from '@angular/core';
import { USER_BASE_URL } from '../../config/signUp.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }

  private apiUrl = `${USER_BASE_URL}/users`; 
  private tokenKey = 'username';

  private authTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    // Initialize token from localStorage on service instantiation
    this.authTokenSubject.next(localStorage.getItem(this.tokenKey));
  }

  getAuthToken(): Observable<string | null> {
    return this.authTokenSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };

    return this.http.post<any>(`${this.apiUrl}/login`, loginData)
      .pipe(
        tap(response => this.handleAuthentication(response))
      );
  }

  logout(): void {
    // Clear token and reset the BehaviorSubject
    localStorage.removeItem(this.tokenKey);
    this.authTokenSubject.next(null);
  }

  public handleAuthentication(response: any): void {
    const authToken = response.token;

    // Store token in localStorage
    localStorage.setItem(this.tokenKey, authToken);

    // Update BehaviorSubject with the new authToken
    this.authTokenSubject.next(authToken);
  }

  private appendTokenToHeaders(headers: HttpHeaders): HttpHeaders {
    const authToken = this.authTokenSubject.value;

    if (authToken) {
      return headers.set('Authorization', `Bearer ${authToken}`);
    }

    return headers;
  }

  // Interceptor function to add Authorization header to HTTP requests
  addTokenToRequest(requestHeaders: HttpHeaders): HttpHeaders {
    return this.appendTokenToHeaders(requestHeaders);
  }}
