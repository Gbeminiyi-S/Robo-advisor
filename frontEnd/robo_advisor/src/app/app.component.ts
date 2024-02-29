import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './pages/form/form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    FormComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
