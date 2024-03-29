import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/productservice/product.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
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
  books: Book[] = [];
  clicked = false;
  pageIndex = 0;
  pageSize = 8;
  totalBooks = 0;

  booksToDisplay: Book[] = [];

  constructor(public productservice: ProductService, public router: Router) {
    this.productservice.getbooks().subscribe((result: any) => {
      this.books = result.result;
      this.totalBooks = this.books.length;
      this.getDisplayedBooks();
      console.log(this.books[0]);
      console.log(localStorage.getItem("token"));
    })
  }

  ngOnInit(): void {
  }

  gotobooks(bookId: string) {
    console.log(bookId);
  this.router.navigate(['/bookstore/books', bookId]);
    alert("hi")
  }

  getDisplayedBooks(): void {
    this.booksToDisplay = this.books.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize=event.pageSize;
    this.getDisplayedBooks();
  }

  getTotalBooks(): number {
    return this.books.length;
  }
}
