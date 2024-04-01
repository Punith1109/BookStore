import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private book:any;

  constructor(public httpService:HttpservicesService) { }


  getbooks(){
    return this.httpService.getbookAPi();
  }

  setbook(book:any){
this.book=book;
  }
  getBook(){
    return this.book;
  }
  
}
