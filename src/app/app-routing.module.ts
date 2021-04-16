import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { InforComponent } from './infor/infor.component';
import { AccountComponent } from './account/account.component';
import { TrendComponent } from './trend/trend.component';
import { CartComponent } from './cart/cart.component';
import { Product } from './models/product';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: ProductsComponent},// trang chủ
  {path: 'detail/:id', component: ProductDetailComponent},// chi tiết
  {path: 'cart', component: CartComponent},// giỏ đồ
  {path: 'trend', component: TrendComponent},// xu hướng
  {path: 'account', component: AccountComponent},//tài khoản
  {path: 'account/infor', component: InforComponent},// thông tin tài  khoản
  {path: 'login', component: LoginComponent},// đăng nhập
  {path: 'cart/history', component: HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
