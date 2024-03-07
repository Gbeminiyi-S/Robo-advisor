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
            label: 'Capital Allocation by Percentage',
            data: this.converteData,
            backgroundColor: ['darkblue', 'gold', 'grey', 'red', 'green'],
            borderColor: '#36A2EB',
            borderWidth: 1.4,
            barThickness: 40,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: {
            labels: {
              color: 'black', // Change font color of labels
              font: {
                size: 14, // Adjust font size of labels
                weight: 'bold', // Adjust font weight of labels
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'black',
              font: {
                weight: 'bold',
              },
              // Change font color for y-axis labels to black
            },
          },
          x: {
            ticks: {
              color: 'black', // Change font color for x-axis labels to black
              font: {
                weight: 'bolder',
              },
            },
          },
          
        },
      },
    });
  }
}
