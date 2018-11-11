import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { productService } from './productService';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  idOfProduct: number;
  errorMessage: any;
  
  constructor(private route: ActivatedRoute, private productService: productService, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    )
  }

  onBack(){
    console.log('navigate');
    this.router.navigate(['/products']);
  }

}
