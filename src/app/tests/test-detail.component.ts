import { Component, OnInit } from '@angular/core';
import { Itest } from './test';
import { ActivatedRoute, Router } from '@angular/router';
import { testService } from './testService';
import { stepService } from './stepService';
import { Istep } from './step';

@Component({
  selector: 'pm-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class testDetailComponent implements OnInit {
  pageTitle: string = 'test Detail';
  test: Itest;
  idOftest: number;
  errorMessage: any;
  showSteps: boolean = false;
  steps: Istep;
  
  constructor(private route: ActivatedRoute, private testService: testService, private router: Router, private stepService: stepService) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.gettest(id)
      this.getStepsForTest(id);
    }
  }

  gettest(id: number){
    this.testService.gettest(id).subscribe(
      test => this.test = test,
      error => this.errorMessage = <any>error
    )
  }
  getStepsForTest(id: number){
    this.stepService.getStepsForTest(id).subscribe(
      steps => this.steps = steps,
      error => this.errorMessage = <any>error
    )
  }

  onBack(){
    console.log('navigate');
    this.router.navigate(['/tests']);
  }

  toggleSteps(): void {
    this.showSteps = !this.showSteps;
  }

}
