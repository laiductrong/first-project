import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  product: Product = new Product;
  productdetail!: Product;
  activatedRoute: any;
  listProducts: Product[]=[];
  name: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProductFromRouter();
    this.getProductFromService();
  }
  getProductFromRouter(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductFromId(id).subscribe(product=>this.product=product);
  }

  //getlist
  getProductFromService(): void {
    //this.products=this.productService.getProduct();
    this.productService.getProduct().subscribe(
      (updateProducts) => {
        this.listProducts = updateProducts;
      }
    );
  }
  seeMore(brand: string): void{
    this.name=brand;
  }
}
