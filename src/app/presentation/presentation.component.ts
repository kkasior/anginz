import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'pm-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {


  automatedBySprintChart = [];
  loginAuthenticationChart = [];
  imageProviderChar = [];
  constructor() { }
  

  ngOnInit() {
      this.automatedBySprintChart = new Chart('automatedBySprintChart', {
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
    this.loginAuthenticationChart = new Chart('loginAuthenticationChart', {
      type: 'pie',
      data: {
        labels: ['a','b','c','d'],
        datasets: [
          {
            label: 'My first DP',
            backgroundColor: ['red', 'blue', 'green', 'grey'],
            data: [1,3,5,10]
          }
        ], 
      } 
    })
    this.imageProviderChar = new Chart('imageProviderChart', {
     type: 'pie',
      data: {
       labels: ['a','b','c','d'],
       datasets: [
         {
           label: 'My first DP',
           backgroundColor: ['red', 'blue', 'green', 'grey'],
           data: [1,3,5,10]
          }
        ], 
     } 
    })
  }

}
