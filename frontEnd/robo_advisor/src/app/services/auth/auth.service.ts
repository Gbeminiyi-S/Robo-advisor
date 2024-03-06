import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetailsService } from '../user-details/user-details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userDetailsService: UserDetailsService) {
    // Initialize the authentication status based on user details
    this.isAuthenticatedSubject.next(this.userDetailsService.isLoggedIn.value);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(username: string, password: string): void {
    // Perform authentication logic here (e.g., check credentials, retrieve tokens, etc.)

    // For example, set isAuthenticated to true if authentication is successful
    this.isAuthenticatedSubject.next(true);

    // Update user details
    this.userDetailsService.setUsername(username);
  }

  logout(): void {
    // Perform logout logic here (e.g., clear tokens, reset user data, etc.)

    // For example, set isAuthenticated to false after logout
    this.isAuthenticatedSubject.next(false);

    // Clear user details
    this.userDetailsService.clearUsername();
  }

  // ... Other authentication-related methods ...

  // Example method to check the authentication status
  private checkAuthenticationStatus(): boolean {
    // Implement your logic to check if the user is authenticated
    // This might involve checking tokens, session storage, or other authentication mechanisms.
    // Return true if authenticated, false otherwise.
    return this.isAuthenticatedSubject.value;
  }}
