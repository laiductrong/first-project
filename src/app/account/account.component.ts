import { AccountService } from './../account.service';
import { Account } from './../models/account';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[] = [];
  idAccount = '';
  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  message: string = '';
  valuePhone: string = '';
  registerPhone(idPhone: string): void {
    if (Number.isNaN(Number(idPhone))) {
      alert("vui lòng nhập số");
    }
    else {
      if (idPhone.length != 10) {
        alert("số điện thoại gòm 10 kí tự")
      }
      else {
        this.idAccount = idPhone;
        this.accountService.search(idPhone).subscribe((account: any) => {
          // console.log(account);
          if (account.length > 0) {
            alert("tai khoan da ton tai");
          } else {
            this.router.navigate(['/account/infor']);
          }
        })
      }
    }
  }


  

  //add account
  // addAccount(id: string, phonenumber: string, pass: string, name: string, address: string): void {
  //   const newAccount: Account = new Account();
  //   newAccount.id = Number(id);
  //   newAccount.pass = pass;
  //   newAccount.name = name;
  //   newAccount.address = address;
  //   newAccount.phonenumber = phonenumber;
  //   this.accountService.addAccount(newAccount).subscribe(insertedAccount => {
  //     this.accounts.push(insertedAccount);
  //   });
  // }



}