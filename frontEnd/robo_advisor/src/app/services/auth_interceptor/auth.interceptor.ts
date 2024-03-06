import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private authTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = this.authService.addTokenToRequest(request.headers);
    const authRequest = request.clone({ headers });
    return next.handle(authRequest);
  }

  getAuthToken(): Observable<string | null> {
    return this.authTokenSubject.asObservable();
  }
  
  private appendTokenToHeaders(headers: HttpHeaders): HttpHeaders {
    const authToken = this.authTokenSubject.value;
  
    if (authToken) {
      return headers.set('Authorization', `Bearer ${authToken}`);
    }
  
    return headers;
  }

  
}