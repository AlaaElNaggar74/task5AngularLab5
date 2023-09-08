import { Component } from '@angular/core';
import { ServiceService } from '../servCounter/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  couCom: number = 0;
  constructor(public _ServiceService: ServiceService) {
    this._ServiceService.getValue().subscribe((val) => (this.couCom = val.length));
  }

 


}
