import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { navbarData } from './nav-data';
import { BehaviorSubject } from 'rxjs';
import { UserDetailsService } from '../../../services/user-details/user-details.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass, RouterLinkActive],
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.css',
})
export class DashboardNavbarComponent {
  @Output() onToggleSiddeNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  showLabel = true;
  screenWidth = 0;
  navData = navbarData;
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  username: string | null = null;
  email: string | null = null;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSiddeNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSiddeNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  constructor(
    private userDetails: UserDetailsService,
    private router: Router,
  ) {}
  @HostListener('document:click', ['$event'])
  ngOnInit(): void {
    this.userDetails.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn$.next(loggedIn);
      this.username = this.userDetails.getUsername();
      this.email = this.userDetails.getEmail();
    
    });
  }
  logOut(): void {
    this.userDetails.clearUsername();
    this.userDetails.clearEmail();
    this.router.navigate(['/']);
  }
}
