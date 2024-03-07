import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { TableComponent } from '../table/table.component';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FinancialProduct } from '../../../models/interfaces/ResponseList';
import { AdviceService } from '../../../services/advice/advice.service';
import { UserDetailsService } from '../../../services/user-details/user-details.service';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [BarChartComponent, DoughnutChartComponent, TableComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
})
export class MainSectionComponent implements OnInit {
  public chart: any;
  chartInfo: any;

  constructor(private service: AdviceService) {}

  ngOnInit(): void {
    this.service.getChartInfo().subscribe(
      (response) => {
        this.chartInfo = response;
      },
      (error) => {
        console.log('error loading data', error);
      },
    );
  }
}
