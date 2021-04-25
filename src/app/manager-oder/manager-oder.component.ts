import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Account } from './../models/account';
import { ItemCheckOut } from './../models/itemcheckout';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager-oder',
  templateUrl: './manager-oder.component.html',
  styleUrls: ['./manager-oder.component.css']
})
export class ManagerOderComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private modalService: NgbModal,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItemsCheckOut();
  }
  //global item to show infor
  itemifor!: ItemCheckOut;
  //global users oder
  accountOder: Account[]=[];
  //global user oder
  name: string='';
  address: string='';
  phonenumber: string='';

  //modal
  openVerticallyCentered(content: any, itemoder: ItemCheckOut) {
    this.itemifor=itemoder;
    this.accountService.searchAccountFromID(itemoder.iduser).subscribe(
      (userOder)=>{
       this.accountOder=userOder;
       this.name=this.accountOder[0].name;
       this.address=this.accountOder[0].address;
       this.phonenumber=this.accountOder[0].phonenumber;
      }
    );
    console.log(this.accountOder);
    //mở chi tiết
    this.modalService.open(content, { centered: true });
  }

  

  //item need check out
  itemsCheckOut: ItemCheckOut[]=[];
  getItemsCheckOut():void{
    this.cartService.getItemNeedOder().subscribe(
      (itemOder) => {
        this.itemsCheckOut = itemOder;
        console.log(this.itemsCheckOut);
      }
    );
  }


  delivery(idOder: number):void{
    console.log(idOder);
    this.cartService.deliveryOder(this.itemifor).subscribe();
    //reload trang
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }
}
