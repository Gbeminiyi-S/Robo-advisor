import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { AdviceService } from '../../../services/advice/advice.service';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent implements OnInit {
  public chart: any;
  chartInfo: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  converteData: any[] = [];

  constructor(public service: AdviceService) {}

  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData(): void {
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
        this.renderChart();
      },
      (error) => {
        console.log('error loading data', error);
      },
    );
  }

  renderChart(): void {
    this.chart = new Chart('barChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.labeldata,
        datasets: [
          {
            label: 'Recommendations',
            data: this.converteData,
            backgroundColor: ['darkblue', 'gold', 'grey', 'red', 'green'],
            barThickness: 40,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
