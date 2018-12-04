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
  automatedAndNotAutomated = [];
  constructor() { }
  

  ngOnInit() {
    this.loginAuthenticationChart = new Chart('dailyResults', {
      type: 'pie',
      data: {
        labels: ['passed','failed','not run'],
        datasets: [
          {
            label: 'LoginProvider',
            backgroundColor: ['green', 'red', 'blue'],
            data: [10,3,2]
          }
        ], 
      } 
    })
      this.automatedBySprintChart = new Chart('automatedBySprintChart', {
      type: 'line',
      data: {
        labels: ['SP20','SP21','SP22','SP23','SP24','SP26','SP27','SP28'],
        datasets: [
          {
            label: 'Number of automated tests',
            data: [1,3,5,7,9,10,11,13,14,15],
            backgroundColor: '#8A2BE2',
            borderColor: '#8A2BE2',
            fill: false,
          }
        ], 
      } 
    })
    this.loginAuthenticationChart = new Chart('loginAuthenticationChart', {
      type: 'pie',
      data: {
        labels: ['passed','failed','active','not run'],
        datasets: [
          {
            label: 'LoginProvider',
            backgroundColor: ['green', 'red', 'blue'],
            data: [1,3,5,10]
          }
        ], 
      } 
    })
    this.automatedAndNotAutomated = new Chart('automatedAndNotAutomatedChart', {
     type: 'doughnut',
      data: {
       labels: ['automated','not-automated','planed','unplaned'],
       datasets: [
         {
           label: 'My first DP',
           backgroundColor: ['#008000', '#B22222', '#ADFF2F', 'grey'],
           data: [1,3,5,10]
          }
        ], 
     } 
    })
  }

}
