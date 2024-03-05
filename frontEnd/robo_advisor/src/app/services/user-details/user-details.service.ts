import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private readonly STORAGE_KEY = 'user_username';
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  getUsername(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }
  
  setUsername(username: string): void {
    localStorage.setItem(this.STORAGE_KEY, username);
    this.isLoggedIn.next(true); 
  }

  clearUsername(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.isLoggedIn.next(false); 
  }
}
