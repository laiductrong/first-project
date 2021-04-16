import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  name: any;
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.getProductFromService();
  }
  check(s: string): void{
    alert(s);
  }
  getProductFromService(): void {
    //this.products=this.productService.getProduct();
    this.productService.getProduct().subscribe(
      (updateProducts) => {
        this.products = updateProducts;
        console.log(this.products);
        
      }
    );
  }
  //sort
  key: string = 'id';
  status: boolean = false;
  sort(key: string) {
    this.key = key;
    this.status = !this.status;
  }
  //pagination
  p: number = 1;

}
