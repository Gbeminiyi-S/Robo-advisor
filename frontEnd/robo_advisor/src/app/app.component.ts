import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
export class AppComponent {
  // constructor(private router: Router) {
  //   // Listen for route changes
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       // Check if it's a page refresh
  //       if (!this.router.navigated) {
  //         // Trigger the storePageDataBeforeRefresh function in your LoginComponent
  //         // You might need to adjust this based on your route structure
  //         // This assumes that your LoginComponent is directly under the root route '/'
  //         this.router.navigateByUrl('/login').then(() => {
  //           this.router.navigateByUrl('/');
  //         });
  //       }
  //     }
  //   });
  // }
}
