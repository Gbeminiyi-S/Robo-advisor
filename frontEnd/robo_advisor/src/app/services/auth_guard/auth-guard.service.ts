import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserDetailsService } from '../user-details/user-details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userDetails: UserDetailsService, private router: Router) { }

  canActivate(): boolean {
    if (this.userDetails.isLoggedIn.getValue()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
