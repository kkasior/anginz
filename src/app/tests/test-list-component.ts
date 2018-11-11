import { Component, OnInit } from "@angular/core";
import { Itest } from "./test";
import { testService } from "./testService";
import { error } from "util";

@Component({
    selector:'pm-tests',
    templateUrl: './test-list-component.html',
    styleUrls:['./test-list-component.css']
})
export class testListComponent implements OnInit{
    pageTitle : string = "Test list";
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    filteredtests: Itest[];
    errorMessage : string;
    
    constructor(private testService: testService) {
        this.listFilter = 'cart';
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
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
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
}