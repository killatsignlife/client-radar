import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-annotation';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']

})

export class GraficoComponent {

  public chart: any;

  dados = [

    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  createChart() {

    this.chart = new Chart("MyChart", {

      type: 'bar',
      options: {
        maintainAspectRatio: true,
        animation: false,
        plugins: {
          legend: {
            display: true
          }
        }
      },
      data: {
        labels: ['JAN', 'FEV', 'MAR', 'ABR',
          'MAI', 'JUN', 'JUL'],
        datasets: [
          {
            label: "Funcionarios",
            data: [350, 576, 122, 79, 92, 574, 111, 453], // Valores numéricos
            backgroundColor: 'yellow'
          },
          {
            label: "Voluntarios",
            data: [467, 250, 572, 79, 80, 234, 573, 576], // Valores numéricos
            backgroundColor: 'black'
          },
          {
            label: "Desaparecidos",
            data: [500, 400, 572, 20, 92, 574, 222, 576], // Valores numéricos
            backgroundColor: 'gray'
          }
        ]
      },

    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}