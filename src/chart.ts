import { BarController, BarElement, CategoryScale, Chart, ChartType, LinearScale } from 'chart.js';

export class ChartRef {
  readonly chart: Chart;
  constructor(args: {
    canvasElm: HTMLCanvasElement;
    label: string;
    colorRGB: { r: number, g: number, b: number },
  }) {
    const {
      canvasElm,
      label,
      colorRGB,
    } = args;
    const ctx = canvasElm.getContext('2d')!;
    Chart.register(BarController, BarElement, CategoryScale, LinearScale);
    const myChart = new Chart(ctx, {
      type: 'bar' as ChartType,
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
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'seconds waiting for match',
              color: 'white',
            },
            ticks: {
              color: 'white',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'matches',
              color: 'white',
            },
            ticks: {
              color: 'white',
            },
          },
        },
      }
    });
    this.chart = myChart;
  }
}
