import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css'
})
export class FAQPageComponent {

}
