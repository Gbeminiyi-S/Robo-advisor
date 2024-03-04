import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/dashboardComponents/header/header.component';
import { MainSectionComponent } from '../../components/dashboardComponents/main-section/main-section.component';
import { DashboardNavbarComponent } from '../../components/dashboardComponents/dashboard-navbar/dashboard-navbar.component';
import { ChartBaseComponent } from '../../components/dashboardComponents/chart-base/chart-base.component';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [DashboardNavbarComponent, HeaderComponent, MainSectionComponent, ChartBaseComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
