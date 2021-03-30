import { Product } from './models/product';
import { fakeData } from './fake-data';
import { Injectable } from '@angular/core';
import { Observable,of,from } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsURL='http://localhost:3000/products';
  getProduct(): Observable<Product[]>{
    //return of(fakeData);
    return this.http.get<Product[]>(this.productsURL);
  }
  getProductFromId(id:number): Observable<Product>{
    const url=`${this.productsURL}/${id}`;
    return this.http.get<Product>(url);
  }
  constructor(
    private http: HttpClient
  ) { }
}
