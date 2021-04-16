import { Product } from './models/product';
import { fakeData } from './fake-data';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsURL = 'http://localhost:3000/products';
  getProduct(): Observable<Product[]> {
    //return of(fakeData);
    return this.http.get<Product[]>(this.productsURL);
  }
  getProductFromId(id: number): Observable<Product> {
    const url = `${this.productsURL}/${id}`;
    return this.http.get<Product>(url);
  }
  updateProduct(product: Product, total: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    product.sold = product.sold + total;
    let id=product.id;
    this.http.put(this.productsURL +'/'+ id, product).subscribe(data => {
      
    });
  }
  constructor(
    private http: HttpClient
  ) { }
}
