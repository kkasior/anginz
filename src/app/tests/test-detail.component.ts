import { Component, OnInit } from '@angular/core';
import { Itest } from './test';
import { ActivatedRoute, Router } from '@angular/router';
import { testService } from './testService';

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
  
  constructor(private route: ActivatedRoute, private testService: testService, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.gettest(id);
    }
  }

  gettest(id: number){
    this.testService.gettest(id).subscribe(
      test => this.test = test,
      error => this.errorMessage = <any>error
    )
  }

  onBack(){
    console.log('navigate');
    this.router.navigate(['/tests']);
  }

}
