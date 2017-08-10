import { Component} from '@angular/core';

@Component({
  selector: 'app-grafica-donas',
  templateUrl: './grafica-donas.component.html',
  styleUrls: ['./grafica-donas.component.css']
})
export class GraficaDonasComponent {
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
