import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserDetailsService } from '../../services/user-details/user-details.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  menuOpen: boolean = false;
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private userDetails: UserDetailsService) {}
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const container = document.querySelector('.hamburger') as HTMLElement;
    const container2 = document.querySelector('.desktop_menu') as HTMLElement;

    if (
      !container.contains(event.target as Node) &&
      !container2.contains(event.target as Node)
    ) {
      this.menuOpen = false;
      this.isMenuOpen = false;
    }
  }

  // ngOnInit(): void {
  //   console.log('NavbarComponent - ngOnInit');
  //   // adding methodology for making the user stay logged-in, on refreshing...

  //   // to check if the user was previously logged in...
  //   const storedLoginStatus = localStorage.getItem('isLoggedIn');
  //   const previousLoginStatus = storedLoginStatus
  //     ? JSON.parse(storedLoginStatus)
  //     : false;

  //   // Set the initial login status
  //   this.isLoggedIn$.next(previousLoginStatus);

  //   // Subscribe to updates in the login status
  //   this.userDetails.isLoggedIn.subscribe((loggedIn) => {
  //     this.isLoggedIn$.next(loggedIn);
  //   });
  // }
  // logOut(): void {
  //   this.userDetails.clearUsername();
  // }

  ngOnInit(): void {  
    // Check if running in a browser environment
    if (typeof localStorage !== 'undefined') {
      const storedLoginStatus = localStorage.getItem('isLoggedIn');
      const previousLoginStatus = storedLoginStatus ? JSON.parse(storedLoginStatus) : false;
  
      console.log('Previous Login Status:', previousLoginStatus);
  
      this.isLoggedIn$.next(previousLoginStatus);
  
      this.userDetails.isLoggedIn.subscribe((loggedIn) => {
        console.log('UserDetails Service - LoggedIn:', loggedIn);
        this.isLoggedIn$.next(loggedIn);
      });
    } else {
      console.warn('localStorage is not available. Check the execution environment.');
    }
  }
  

  logOut(): void {
    this.userDetails.clearUsername();
  }

}
