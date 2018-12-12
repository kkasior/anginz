import { Component, OnInit } from "@angular/core";
import { Itest } from "./test";
import { testService } from "./testService";
import { error } from "util";
import { stringify } from "@angular/core/src/util";

@Component({
    selector:'pm-tests',
    templateUrl: './test-list-component.html',
    styleUrls:['./test-list-component.css']
})
export class testListComponent implements OnInit{
    pageTitle : string = "Test list";
    filteredtests: Itest[];
    errorMessage : string;
    
    constructor(private testService: testService) {
        this.listFilter = '';
    }

    _listFilter : string;
    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value : string){
        this._listFilter = value;
        this.filteredtests = this.filteredtests ? this.perfromFilter(this.listFilter) : this.tests;
    }

    tests: Itest[];
    
    ngOnInit(): void {
        this.testService.gettests().subscribe(
            tests => {
                this.tests = tests;
                this.filteredtests = this.tests;  
            },
            error => this.errorMessage = <any>error
        )
             
    }
    perfromFilter(filterBy : string ) : Itest[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.tests.filter((test: Itest) =>
            test.testName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message : string){
        this.pageTitle = message;
    }
    displayStatus() : void{
        console.log(this.testService.gettest);
    }
}