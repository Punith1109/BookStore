import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/cartservice/cart.service';
import { Router } from '@angular/router';
interface BookObj {
  "bookName": string,
  "description": string,
  "author": string,
  "quantity": number,
  "price": number,
  "discountPrice": number,
  "_id": string
}
interface cartdetailsinterface {
  "product_id": BookObj;
  "quantity": number;
  "_id": string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  books: BookObj[] = [];
  cartdetails: cartdetailsinterface[] = [];
  isOrderPlaced: boolean = false;
  totalcartbooks: number = 0;
  items: number[] = [];
  orderclicked:boolean=false;

  constructor(public cartservice: CartService,public router: Router) {}

  ngOnInit() {
    this.getCartList();
    this.books.forEach(() => this.items.push(0));
  }

  getCartList() {
    this.cartservice.getBookListCall().subscribe((result: any) => {
      this.cartdetails = result.result;
      console.log(this.cartdetails);

      this.cartdetails.map((item: cartdetailsinterface) => {
        this.books.push(item.product_id);
        this.items.push(item.quantity); // Push quantity of each book
      });
    });

    this.totalcartbooks = this.books.length;
  }

  removebook(id: string, index: number) {
    this.cartservice.removebook(id).subscribe((result) => {
      this.books.splice(index, 1);
      this.items.splice(index, 1); 
      this.totalcartbooks--; 
    });
  }

  placeorder() {
    this.isOrderPlaced = true;
    this.totalcartbooks = this.books.length;
  }

  addOne(index: number) {
    this.items[index]++;
    this.cartdetails[index].quantity++; 
  }
  
  removeOne(index: number) {
    if (this.items[index] > 0) {
      this.items[index]--;
      this.cartdetails[index].quantity--; 
    }
  }
  checkout(){
    this.router.navigate(['/bookstore/checkout'])
  }
  ordersummary(){
    this.orderclicked=true
  }
}
