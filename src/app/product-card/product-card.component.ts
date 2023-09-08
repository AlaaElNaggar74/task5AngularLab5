import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../servCounter/service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() inputCardToChild: any;
  couCom: number = 0;
  prodArrOfServ: Array<object> = [];
  findObj: any;

  constructor(public _router: Router, public _ServiceService: ServiceService) {
    this._ServiceService
      .getValue()
      .subscribe((val) => (this.couCom = val.length));
    this._ServiceService
      .getValue()
      .subscribe((val) => (this.prodArrOfServ = val));
  }

  getProductInfo(productId: any) {
    this._router.navigate(['details', productId]);
  }

  addProToServ(prodObj: any) {
    this.findObj = this.prodArrOfServ.find((ele: any) => {
      return ele.id == prodObj.id;
    });
    if (this.findObj) {
      prodObj.quantity = prodObj.quantity + 1;
    } else {
      prodObj.quantity = 1;
      this._ServiceService.addCard(prodObj);
    }
  }
}
