import { CartComponent } from './cart/cart.component';
import { Product } from './models/product';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: ProductsComponent},// trang chủ
  {path: 'detail/:id', component: ProductDetailComponent},// chi tiết
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
