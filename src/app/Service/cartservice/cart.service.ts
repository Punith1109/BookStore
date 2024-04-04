import { Injectable } from '@angular/core';

import { HttpservicesService } from '../Httpservices/httpservices.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(public httpservice: HttpservicesService) { }

  
  getBookListCall(){
    return this.httpservice.getcartbooks()
   }

  addToCart(id:string){
    return this.httpservice.addCart(id)
  }
  removebook(id:string){
    return this.httpservice.removebook(id);
  }
  // updatequantity(){
  //   return this.httpservice.updatecart();
  // }
}
