import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base/chart-base.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';


@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
  
}
