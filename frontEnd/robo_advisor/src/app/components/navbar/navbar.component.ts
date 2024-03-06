import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() {}

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

}
