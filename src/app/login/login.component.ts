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

  //reload page
  reloadPage(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  login(phoneNumber: string, password: string): void {

    //login admin
    if(phoneNumber==='admin'&& password==='admin'){
      this.router.navigate(['/manengadmin']);
    }

    if (this.checkValue(phoneNumber, password)) {
      this.accountService.loginAccount(phoneNumber, password).subscribe((account) => {
        if (account.length > 0) {
          localStorage.setItem('SDT', JSON.stringify(phoneNumber));
          this.getinfor(phoneNumber);
          this.router.navigate(['/home']);
        }
        else {
          console.log('false');
          alert('sai thông tin đăng nhập');
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

  //logout
  logoutaccout(): void{
    localStorage.removeItem('account');
    //this.nameaccount='Login';
  }

}
