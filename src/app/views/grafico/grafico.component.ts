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

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['JAN', 'FEV', 'MAR', 'ABR',
          'MAI', 'JUN', 'JUL'],
        datasets: [
          {
            label: "Funcionarios",
            data: [350, 576, 122, 79, 92, 574, 111, 453], // Valores numéricos
            backgroundColor: 'red'
          },
          {
            label: "Voluntarios",
            data: [467, 250, 572, 79, 80, 234, 573, 576], // Valores numéricos
            backgroundColor: 'green'
          },
          {
            label: "Desaparecidos",
            data: [500, 400, 572, 20, 92, 574, 222, 576], // Valores numéricos
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 2
      }

    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
