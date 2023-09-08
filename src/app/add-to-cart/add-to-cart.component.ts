import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../interface/products';
import { Location } from '@angular/common';
import postjson from '../../data.json';

import { ServiceService } from '../servCounter/service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  myProducts: any = [];
  total: number=0;
  couCom: number = 0;

  
  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _router: Router,
    public _location: Location,
    public _ServiceService: ServiceService
  ) {
    this._ServiceService.getValue().subscribe((val) => {
      console.log("sssssssss",val);
      for (let index = 0; index < val.length; index++) {
        this.total += val[index].price  * val[index].quantity
        // console.log("val[index].price",typeof val[index].price);
        // console.log("val[index].quantity",typeof val[index].quantity);
        
        
      }
      console.log("this.total",this.total);
      
      
      // this.total = val.reduce((acc: any, ele: any) => {
      //   acc += (Number(ele.price) * Number(ele.quantity), 0);
      // });
    });
    console.log("--this.total----",this.total)
    console.log("--this.total----",this.myProducts)
    

    this._ServiceService
      .getValue()
      .subscribe((val) => (this.couCom = val.length));

    this._ServiceService.getValue().subscribe((val) => (this.myProducts = val));

    // this.total = this.myProducts.reduce(
    //   (acc: any, ele: any) =>{
    //    return acc += (Number(ele.price) * Number(ele.quantity), 0)}
    // );
  }
  ngOnInit() {
    // this.total = this.myProducts.reduce(
    //   (acc: any, ele: any) =>{
    //    return acc += (Number(ele.price) * Number(ele.quantity), 0)}
    // );
    // this.total = this.myProducts.reduce((acc:any, ele: any) => {
    //   return acc ;
    // });
  }

  backHome() {
    this._router.navigate(['home']);
  }
  backLastPage() {
    this._location.back();
  }

  plus(obj: any) {
    if (obj.quantity == obj.stock) {
    } else {
      obj.quantity += 1;
      this.total += obj.price 

    }
  }

  reduce(obj: any) {
    if (obj.quantity == 1) {
    } else {
      obj.quantity -= 1;
      this.total -= obj.price 

    }
  }

  remFromCartObj(obj: any) {
    this.myProducts = this.myProducts.filter((ele: any) => {
      return ele.id != obj.id;
    });
    this.total=0;
    this._ServiceService.deleteCard(this.myProducts);
  }
}
