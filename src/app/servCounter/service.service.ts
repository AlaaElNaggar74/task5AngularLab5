import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private selectedPro = new BehaviorSubject<Array<any>>([]);

  getValue() {
    // return this.count.asObservable();
    return this.selectedPro.asObservable();
  }

  constructor(public _HttpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this._HttpClient.get('https://dummyjson.com/products');
  }
  getDetails(id:any): Observable<any> {
    return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
  }
  getByCateg(categ:any): Observable<any> {
    return this._HttpClient.get(`https://dummyjson.com/products/category/${categ}`);
  }
  serach(categ:any): Observable<any> {
    return this._HttpClient.get(`https://dummyjson.com/products/search?q=${categ}`);
  }


  addCard(neObj: object) {
    this.selectedPro.next([...this.selectedPro.value, neObj]);
  }
  deleteCard(neArr: any) {
    this.selectedPro.next([...neArr]);
  }

 
}
