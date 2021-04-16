import { AccountService } from './account.service';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { TrendComponent } from './trend/trend.component';
import { InforComponent } from './infor/infor.component';
import { LoginComponent } from './login/login.component';
import { BottomComponent } from './bottom/bottom.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    AccountComponent,
    TrendComponent,
    InforComponent,
    LoginComponent,
    BottomComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule

  ],
  providers: [//khai bao service sử dụng
    ProductService,
    CartService, 
    AccountService
  ],// khai báo service sử dụng
  bootstrap: [AppComponent]
})
export class AppModule { }
