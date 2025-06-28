import { CurrencyPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ApexNonAxisChartSeries, NgApexchartsModule, ApexChart, ApexLegend, ApexDataLabels, ApexPlotOptions } from 'ng-apexcharts'

export interface ChartOptions {
  series: ApexNonAxisChartSeries
  chart: ApexChart
  labels: string[]
  legend: ApexLegend
  dataLabels: ApexDataLabels
  plotOptions: ApexPlotOptions
  colors: string[]
}

@Component({
  selector: 'budgets-chart',
  imports: [NgApexchartsModule, CurrencyPipe],
  templateUrl: './budgets-chart.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetsChart {
  public chartOptions: ChartOptions

  constructor() {
    this.chartOptions = {
      series: [50, 750, 75, 100],
      chart: {
        type: 'donut'
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false
            }
          }
        }
      },
      colors: ['#277c78', '#82C9D7', '#626070', '#F2CDAC'],
      labels: ['Entertainment', 'Bills', 'Dining Out', 'Personal Care']
    }
  }
}
