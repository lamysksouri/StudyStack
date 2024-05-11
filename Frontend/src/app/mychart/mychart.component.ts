import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterChartService } from '../service/master-chart.service';

@Component({
  selector: 'app-mychart',
  template: `
    <h2 class="chart-header">App Statistics</h2>
    <div class="chart-container">
      <canvas id="piechart"></canvas>
    </div>
  `,
  styles: [`
    .chart-header {
      text-align: center;
      margin-bottom: 20px;
    }

    .chart-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 600px; /* Adjust container height as needed */
    }
  `]
})
export class MychartComponent implements OnInit {
  constructor(private service: MasterChartService) {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.renderChart();
  }

  renderChart() {
    this.service.getUsersCount().subscribe(data => {
      // Now you have access to the JSON data, you can use it to render the chart
      const totalProfesseurs = data.users.filter((user: any) => user.type === 'professeur').length;
      const totalEtudiants = data.users.filter((user: any) => user.type === 'etudiant').length;
      const totalMatieres = data.matieres.length;

      const myChart = new Chart("piechart", {
        type: 'pie',
        data: {
          labels: ['Professeurs', 'Étudiants', 'Matières'],
          datasets: [{
            data: [totalProfesseurs, totalEtudiants, totalMatieres],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          aspectRatio: 1,
          responsive: true,
          maintainAspectRatio: false
        }
      });
    });
  }
}
