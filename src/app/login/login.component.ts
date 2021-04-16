import { AppComponent } from './../app.component';
import { Account } from './../models/account';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public userLogined: Account | undefined;
  allAccount: Account[] = [];
  checkValue(phone: string, pass: string): boolean {
    if (Number.isNaN(Number(phone))) {
      return false;
    }
    return true;
  }

  login(phoneNumber: string, password: string): void {

    console.log(this.allAccount);

    if (this.checkValue(phoneNumber, password)) {
      this.accountService.loginAccount(phoneNumber, password).subscribe((account) => {
        if (account.length > 0) {
          localStorage.setItem('SDT', JSON.stringify(phoneNumber));
          this.getinfor(phoneNumber);
          this.router.navigate(['/home']);
        }
        else {
          console.log('false');
        }
      })
    }
  }





  name: string = '';
  getinfor(idPhone: string): void {
    this.accountService.searchPhoneNumber(idPhone).subscribe((accs: Account[]) => {
      localStorage.setItem('account',JSON.stringify(accs[0]));
      localStorage.setItem('iduser',JSON.stringify(accs[0].id));
      let account:any=localStorage.getItem('account');
      account=JSON.parse(String(account));
      console.log(account.name);
    })
  }

}
