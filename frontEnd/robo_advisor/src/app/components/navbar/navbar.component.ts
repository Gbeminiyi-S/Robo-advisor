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

  ngOnInit(): void {
    this.userDetails.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn$.next(loggedIn);
    });
  }
  logOut(): void {
    this.userDetails.clearUsername();
  }
}
