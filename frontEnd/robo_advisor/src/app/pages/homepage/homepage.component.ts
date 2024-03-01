import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UserDetailsService } from '../../services/user-details/user-details.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  username: string | null = null;

  constructor(private userDetails: UserDetailsService){}

  ngOnInit(): void {
    this.username= this.userDetails.getUsername();
  }
}
