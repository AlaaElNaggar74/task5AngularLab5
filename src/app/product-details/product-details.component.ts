import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../interface/products';
import postjson from '../../data.json';
import { Location } from '@angular/common';
import { ServiceService } from '../servCounter/service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // main obj
  prodDetails: any;
  findObj: any;
  pId: any;
  prodArrOfServ: Array<object> = [];

  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _router: Router,
    public _location: Location,
    public _ServiceService: ServiceService
  ) {
    this.pId = this._ActivatedRoute.snapshot.paramMap.get('proId');

    this._ServiceService.getDetails(this.pId).subscribe({
      next: (ele) => {
        this.prodDetails = ele;
      },
    });

    this._ServiceService
      .getValue()
      .subscribe((val) => (this.prodArrOfServ = val));
  }

  backHome() {
    this._location.back();
  }
}
