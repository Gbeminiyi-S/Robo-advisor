import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navbarData } from './nav-data';
import { UserDetailsService } from '../../services/user-details/user-details.service';
import { BehaviorSubject } from 'rxjs';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}



@Component({
  selector: 'app-dashboard-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass, RouterLinkActive],
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.css'
})
export class DashboardNavbarComponent {
  @Output() onToggleSiddeNav: EventEmitter<SideNavToggle> = new EventEmitter();
collapsed = false;
screenWidth = 0;
navData = navbarData;
isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


toggleCollapse(): void {
  this.collapsed = !this.collapsed;
  this.onToggleSiddeNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}


closeSidenav(): void {
  this.collapsed = false;
  this.onToggleSiddeNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}


constructor(private userDetails: UserDetailsService) {}
@HostListener('document:click', ['$event'])

ngOnInit(): void {
  this.userDetails.isLoggedIn.subscribe((loggedIn) => {
    this.isLoggedIn$.next(loggedIn);
  });
}
logOut(): void {
  this.userDetails.clearUsername();
}

}
