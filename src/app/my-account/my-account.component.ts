import { AccountService } from './../account.service';
import { Account } from './../models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.checkAccountLogin();
  }
  checkLogin= false ;
  name:any;
  phonenumber='';
  pass='';
  address='';
  id:any;
  checkAccountLogin(): void{
    let account: any = localStorage.getItem('account');
    account = JSON.parse(String(account));
    if(account){  
      this.checkLogin=true;
      this.id=account.id;
      this.name=account.name;
      this.phonenumber=account.phonenumber;
      this.pass=account.pass;
      this.address=account.address;
    }
    console.log(this.name)
  }
  checkPass(va:any):void{
    console.log(va);
  }
  checkNewPass(name:string,pass: string, newpass: string, comfpass: string, address: string){
    if(!name||!pass||!newpass||!comfpass||!address){
      alert('vui lòng điền đủ thông tin');
    }
    else if(pass!==this.pass){
      alert('sai mật khẩu');
    }else if(newpass!=comfpass){
      alert('mật khẩu mới và xác nhận mật khẩu phải giống nhau');
    }
    else{
      let acc=new Account;
      acc.id=this.id;
      acc.name=name;
      acc.pass=newpass;
      acc.phonenumber=this.phonenumber;
      acc.address=address;
      this.accountService.changeAccount(acc).subscribe(
        changeAccount=>{
          alert('thay đổi thành công tài khoản');
          console.log('change account');
        }
      )
      
    }
  }
  changeAccount(name: string, pass: string, address: string):void{

  }

}
