import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Série A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Série B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Série C' }
  ];

  public lineChartLabels: Array<any> = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartLegend = true;
  public lineChartType = 'line';
}
