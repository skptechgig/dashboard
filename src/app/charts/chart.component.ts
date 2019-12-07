import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, Host } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit { 
  @Input() labelValue: string; 
  public lineChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'conference' },
];
public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 
public lineChartOptions: (ChartOptions ) = {
  responsive: true,
  scales: { 
      yAxes: [{
         scaleLabel: {
            display: true,
            labelString: 'Frequency Rate'
         }
      }],
      xAxes: [{
        scaleLabel: {
           display: true,
           labelString: 'Days'
        }
     }]
   } 

}
public lineChartColors: Color[] = [
  {
    borderColor: 'black',
    //backgroundColor: 'rgba(255,0,0,0.3)',
  },
];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];

constructor() { }

ngOnInit() {
  console.log(this.labelValue);
}
}