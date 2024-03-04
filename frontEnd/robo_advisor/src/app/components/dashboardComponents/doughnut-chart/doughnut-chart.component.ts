import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css',
})
export class DoughnutChartComponent implements OnInit {
  public chart: any;
  @Input() realData!: any[];
  @Input() labelData!: any[];

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (this.realData && this.labelData) {
      this.chart = new Chart('MyChart', {
        type: 'bar',
        data: {
          labels: this.labelData,
          datasets: [
            {
              label: 'Recommendations',
              data: this.realData,
              backgroundColor: [
                'darkblue',
                'gold',
                'grey',
                'red',
                'green',
              ],
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
}
