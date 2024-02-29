import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private username: string | null = null;
  constructor() { }

  setUsername(username: string): void{
    this.username=username;
  }
  
  getUsername(): string | null {
    return this.username;
  }
}
