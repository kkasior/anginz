import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { productService } from "./productService";
import { error } from "util";

@Component({
    selector:'pm-products',
    templateUrl: './product-list-component.html',
    styleUrls:['./product-list-component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle : string = "Test list";
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    filteredProducts: IProduct[];
    errorMessage : string;
    
    constructor(private productService: productService) {
        this.listFilter = 'cart';
    }

    _listFilter : string;
    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value : string){
        this._listFilter = value;
        this.filteredProducts = this.filteredProducts ? this.perfromFilter(this.listFilter) : this.products;
    }

    products: IProduct[];
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;  
            },
            error => this.errorMessage = <any>error
        )     
    }
    perfromFilter(filterBy : string ) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message : string){
        this.pageTitle = message;
    }
}