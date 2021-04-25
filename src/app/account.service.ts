import { Account } from './models/account';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AccountService {
  phoneNumber:any;
  constructor(private http: HttpClient) {
  }

  private accountURL = 'http://localhost:3000/account';
  addAccount(newAccount: Account): Observable<Account> {
    return this.http.post<Account>(this.accountURL, newAccount, httpOptions).pipe(
      tap((account: Account) => console.log(`inserted account = ${JSON.stringify(account)}`)),
      catchError(error => of(new Account()))
    );
  }
  // searchPhone(typedString: string): Observable<Account> {
  //   const url=`${this.accountURL}?phonenumber=${typedString}`;
  //   return this.http.get<Account>(url);
  // }

  // search(phoneNumber: string) {
  //   this.phoneNumber=phoneNumber;
  //   return this.http.get<any>(this.accountURL + '?phonenumber=' + phoneNumber, httpOptions).pipe(
  //     catchError(error => of(null))
  //   )
  // }

  search(phoneNumber: string): Observable<Account> {
      this.phoneNumber=phoneNumber;
      return this.http.get<any>(this.accountURL + '?phonenumber=' + phoneNumber, httpOptions);
    }

  //search accout form id
  searchAccountFromID(id: string): Observable<Account[]>{
    const idNumber=new Number(id);
    return this.http.get<Account[]>(this.accountURL+'?id='+idNumber,httpOptions);
  }

  searchPhoneNumber(phoneNumber: string): Observable<Account[]> {
    this.phoneNumber=phoneNumber;
    return this.http.get<any>(this.accountURL + '?phonenumber=' + phoneNumber, httpOptions);
  }
  loginAccount(phoneNumber: string, pass: string){
    return this.http.get<any>(this.accountURL + '?phonenumber=' + phoneNumber +'&pass='+ pass, httpOptions).pipe(
      catchError(error => of(null))
    ) 
  }

  //get all account
  getAllAccount():Observable<Account[]>{
    return this.http.get<Account[]>(this.accountURL).pipe(
      catchError(error=>of([])
      )
    );
  }

  //thay đổi thông tin tài khoản
  changeAccount(newAccount: Account):Observable<Account>{
    const url=this.accountURL+"/"+newAccount.id;
    return this.http.put<Account>(url,newAccount,httpOptions).pipe(    
    );
  }

  //xóa account
  deleteAcount(account: Account): Observable<Account>{
    const url=this.accountURL+"/"+account.id;
    return this.http.delete<Account>(url,httpOptions).pipe(    
    );
  }
 
}
