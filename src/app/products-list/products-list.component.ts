import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Products } from '../interface/products';

import postjson from '../../data.json';
import { ServiceService } from '../servCounter/service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent  {
  categoryType: any;
  products: any;

  constructor(public _ServiceService: ServiceService) {
    this._ServiceService.getProducts().subscribe({
      next: (ele) => {
        this.products = ele.products;
      },
    });
  }

  keyUp(x:any) {
    this._ServiceService.serach(x).subscribe({
      next: (ele) => {
        this.products = ele.products;
      },
    }); 
  
  console.log(this.categoryType);
  
  
  }
}
