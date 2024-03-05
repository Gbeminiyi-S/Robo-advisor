import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private readonly STORAGE_KEY = 'user_username';
  private readonly STORAGE_KEY2 = 'user_email';
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setUsername(username: string): void {
    localStorage.setItem(this.STORAGE_KEY, username);
    this.isLoggedIn.next(true); 
  }

  setEmail(email: string): void {
    localStorage.setItem(this.STORAGE_KEY2, email);
    this.isEmail.next(true); 
  }

  clearUsername(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.isLoggedIn.next(false); 
  }

  clearEmail(): void {
    localStorage.removeItem(this.STORAGE_KEY2);
    this.isEmail.next(false); 
  }

  getUsername(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  getEmail(): string | null {
    return localStorage.getItem(this.STORAGE_KEY2);
  }
}
