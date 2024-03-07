import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/dashboardComponents/footer/footer.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NavbarComponent, FooterComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css'
})
export class FAQPageComponent {

}
