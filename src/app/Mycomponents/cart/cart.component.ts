import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/cartservice/cart.service';

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

  constructor(public cartservice: CartService) {}
  ngOnInit() {
    this.getCartList();
  }

  getCartList() {
    this.cartservice.getBookListCall().subscribe((result: any) => {
      this.cartdetails = result.result;
      console.log(this.cartdetails);

      this.cartdetails.map((item: cartdetailsinterface) => {
        this.books.push(item.product_id);
      });
    });
  }

  removebook(id: string, index: number) {
    this.cartservice.removebook(id).subscribe((result) => {
      this.books.splice(index, 1);
    });
  }

  placeorder(){
    this.isOrderPlaced=true
  }
}
