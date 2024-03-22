import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/productservice/product.service';
import { Router } from '@angular/router';

interface Book {
  "bookName": string,
  "description": string,
  "author": string,
  "quantity": number,
  "price": number,
  "discountPrice": number,
 "_id":string
}
@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})


export class BooksContainerComponent {
books:Book[]=[];
clikced=false;

constructor(public productservice:ProductService, public router:Router){

}

ngOnInit():void{
this.productservice.getbooks().subscribe((result:any)=>{
this.books=result.result
console.log(this.books[0]);

})
}

gotobooks(bookId: string) {
  console.log(bookId);
  
  this.router.navigate(['/bookstore/books', bookId]);
  alert("hi")
}

  
}
