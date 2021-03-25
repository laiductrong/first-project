import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { fakeData } from '../fake-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  name: any;
  price: boolean = true;
  constructor(private productService: ProductService) {

  }
  getProductFromService(): void {
    //this.products=this.productService.getProduct();
    this.productService.getProduct().subscribe(
      (updateProducts) => {
        this.products = updateProducts;
      }
    );
  }
  ngOnInit(): void {
    this.getProductFromService();

  }
  SearchProduct(): void {
    // if(this.name==""){
    //   this.ngOnInit();
    // }else{
    //   this.products=this.products.filter(res=>{
    //     return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    //   });
    //   // alert("not rong");
    // }
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
