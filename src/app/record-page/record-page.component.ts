import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent implements OnInit {
  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Ingresos', 'Retiros', 'Pago de Servicios'],
          datasets: [{
              label: 'Estadisticas para ver movimientos del usuario',
              data: [12, 19, 3,],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.9)',
                  'rgba(54, 162, 235, 0.9)',
                  'rgba(255, 206, 86, 0.9)',

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',

              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
            x: {
              ticks: {
                color: 'white'
              }
            },
              y: {
                  beginAtZero: true,
                  ticks: {
                    color: 'white'
                  }
              }
          },

          plugins: {
            legend: {
              labels: {
                color: "#FFFFFF",
              }
            }
          }
      }
  });
  }
}
