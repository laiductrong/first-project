import { element } from 'protractor';
import { ItemCheckOut } from './models/itemcheckout';
import { Item } from './models/item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map,tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartURL = "http://localhost:3000/cart";
  items: Item[] = [];
  addItem(item: Item): void {

    //tạo cờ đánh dấu xem có sản phẩm nào bị trùng k
    let status = false;
    this.items.forEach(element => {
      if (item.id === element.id && item.color === element.color && item.size === element.size) {// nếu có sản phẩm trùng thì thêm số lượng
        element.total = element.total + item.total;
        status = !status;
      }
    });
    if (!status) {
      this.items.push(item);
    }
    //localStorage.setItem('itemLocal', JSON.stringify(this.items));
  }
  //find item
  findItem(id: number) {
    return this.items.filter(i => i.id === id);
  }

  deleteAllItem(): void {
    this.items = [];
    //localStorage.removeItem('itemLocal');
  }
  getItem(): Item[] {
    return this.items;
  }

  checkOutitem(itemCO: ItemCheckOut): Observable<ItemCheckOut>{
    //delete item cart when chech out
    this.items.forEach((element, index) => {
      if(itemCO.idproduct===element.id && itemCO.color===element.color&& itemCO.size===element.size){
        this.items.splice(index,1);
      }
    })
    //check login
    let account:any=localStorage.getItem('account');
    account=JSON.parse(String(account));
    itemCO.iduser=account.id;
    return this.http.post<ItemCheckOut>(this.cartURL,itemCO,httpOptions).pipe(
      tap((it: ItemCheckOut) => console.log(`inserted item = ${JSON.stringify(it)}`)),
      catchError(error => of(new ItemCheckOut()))
    )
  }
  

  checkOutAllItem(): void {
  }

  addItemToDB(newItemCO: ItemCheckOut): Observable<ItemCheckOut>{
    return this.http.post<ItemCheckOut>(this.cartURL,newItemCO,httpOptions).pipe(
    );
  }

  //get history buy
  getHistory(iduser:number):Observable<ItemCheckOut[]>{
    const url=this.cartURL+'?iduser='+iduser;
    return this.http.get<ItemCheckOut[]>(this.cartURL+'?iduser='+iduser);
  }



  constructor(
    private http: HttpClient
  ) { }
}
