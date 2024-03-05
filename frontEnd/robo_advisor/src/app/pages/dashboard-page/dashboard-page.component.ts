import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/dashboardComponents/header/header.component';
import { MainSectionComponent } from '../../components/dashboardComponents/main-section/main-section.component';
import { DashboardNavbarComponent } from '../../components/dashboardComponents/dashboard-navbar/dashboard-navbar.component';
import { BarChartComponent } from '../../components/dashboardComponents/bar-chart/bar-chart.component';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [DashboardNavbarComponent, HeaderComponent, MainSectionComponent, BarChartComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
