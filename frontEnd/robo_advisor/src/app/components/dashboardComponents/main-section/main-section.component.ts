import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base/chart-base.component';


@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [ChartBaseComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
  
}
