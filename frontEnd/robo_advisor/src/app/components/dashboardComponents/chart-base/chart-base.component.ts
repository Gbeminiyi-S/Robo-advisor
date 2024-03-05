import { Component, OnInit } from '@angular/core';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { AdviceService } from '../../../services/advice/advice.service';

@Component({
  selector: 'app-chart-base',
  standalone: true,
  imports: [DoughnutChartComponent],
  templateUrl: './chart-base.component.html',
  styleUrl: './chart-base.component.css',
})
export class ChartBaseComponent implements OnInit {
  public chart: any;
  chartInfo: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  converteData: any[] = [];

  constructor(public service: AdviceService) {}

  ngOnInit(): void {
    this.service.getChartInfo().subscribe(
      (response) => {
        this.chartInfo = response;
        if (this.chartInfo != null) {
          for (let i = 0; i < this.chartInfo.length; i++) {
            this.labeldata.push(this.chartInfo[i].financial_product);
            this.realdata.push(this.chartInfo[i].composition);
          }
        }
        const numArr = this.realdata.map((numStr) => parseFloat(numStr));
        this.converteData = [...numArr];
      },
      (error) => {
        // console.log('error loading data', error);
      },
    );
  }
  
}
