import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private readonly STORAGE_KEY: string  = 'user_username';
  constructor() { }

  setUsername(username: string): void{
    localStorage.setItem(this.STORAGE_KEY, username)
  }
  
  getUsername(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  clearUsername(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
