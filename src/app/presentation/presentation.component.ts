import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'pm-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {


  chart = [];
  constructor() { }
  

  ngOnInit() {
       this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['a','b','c','d','e','f','g','h'],
        datasets: [
          {
            label: 'My first dataset',
            data: [1,3,5,10,56,65,35,543,543,543],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
          }
        ], 
      } 
      
    })
  }

}
