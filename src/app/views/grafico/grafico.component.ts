import { Component, ViewChild, OnInit  } from '@angular/core';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-annotation';
import { ApiService } from 'src/app/api.service';

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


  /*
  dados: any[];

  ngOnInit(): void {
    this.service.getDados().subscribe(
      (data: any[]) => {
        this.dados = data;
        this.updateChart();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  
  constructor(private service: ApiService){}

  updateChart() {
    if (this.chart) {
      this.chart.data.labels = this.dados.map((item) => item.year);
      this.chart.data.datasets[0].data = this.dados.map((item) => item.count);
      this.chart.update();
    }
  }
  

  public chart: any;

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
        labels: this.dados.map((item) => item.year), // Use os anos como rótulos
        datasets: [
          {
            label: "Funcionarios",
            data: this.dados.map((item) => item.count), // Use os valores numéricos
            backgroundColor: 'yellow'
          },
          // ... outros datasets ...
        ]
      },

    });
  }

  */ 

}