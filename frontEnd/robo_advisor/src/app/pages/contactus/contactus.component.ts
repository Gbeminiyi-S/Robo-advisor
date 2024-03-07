import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/dashboardComponents/footer/footer.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
