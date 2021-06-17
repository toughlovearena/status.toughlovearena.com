import { Chart } from 'chart.js';

export class ChartRef {
  readonly chart: Chart;
  constructor(args: {
    id: string;
    label: string;
    colorRGB: { r: number, g: number, b: number },
  }) {
    const {
      id,
      label,
      colorRGB,
    } = args;
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: label,
          data: [],
          backgroundColor: `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.2)`,
          borderColor: `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 1)`,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        // maintainAspectRatio: true,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'seconds waiting for match',
              fontColor: 'white',
            },
            ticks: {
              fontColor: 'white',
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'matches',
              fontColor: 'white',
            },
            ticks: {
              beginAtZero: true,
              fontColor: 'white',
            },
          }],
        },
      }
    });
    this.chart = myChart;
  }
}
