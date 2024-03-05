import { Component } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';


@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [BarChartComponent, DoughnutChartComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
  
}
