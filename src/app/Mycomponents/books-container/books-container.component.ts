import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/productservice/product.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { SearchService } from 'src/app/Service/searchservice/search.service';

interface Book {
  "bookName": string,
  "description": string,
  "author": string,
  "quantity": number,
  "price": number,
  "discountPrice": number,
  "_id": string
}

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})

export class BooksContainerComponent {
  books: Book[] = [];
  searchquery:string='';
  clicked = false;
  pageIndex = 0;
  pageSize = 8;
  totalBooks = 0;

  booksToDisplay: Book[] = [];
  sortCriteria: string = '';

  constructor(public productservice: ProductService, public router: Router,private searchService: SearchService ) {
    this.productservice.getbooks().subscribe((result: any) => {
      this.books = result.result;
      this.totalBooks = this.books.length;
      this.sortBooks(''); // Default sorting
      this.getDisplayedBooks();
    })
  }

  ngOnInit(): void {
    this.searchService.searchQuery$.subscribe(query => {
      this.searchquery = query;
      this.getDisplayedBooks();
    });
  }
  gotobooks(bookId: string) {
    console.log(bookId);
    this.router.navigate(['/bookstore/books', bookId]);
    alert("hi")
  }

  // getDisplayedBooks(): void {
  //   this.booksToDisplay = this.books.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  // }

  getDisplayedBooks(): void {
    this.booksToDisplay = this.books
      .filter((book) => {
        // Filter by search query
        return book.bookName.toLowerCase().includes(this.searchquery.toLowerCase());
      })
      .slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getDisplayedBooks();
  }

  getTotalBooks(): number {
    return this.books.length;
  }

  sortBooks(criteria: string) {
    this.sortCriteria = criteria;
    if (criteria === 'lowToHigh') {
      this.books.sort((a, b) => a.price - b.price);
    } else if (criteria === 'highToLow') {
      this.books.sort((a, b) => b.price - a.price);
    } else if (criteria === 'newestArrivals') {
      // Implement sorting based on newest arrivals
    }
    this.getDisplayedBooks();
  }

  lowToHigh() {
    this.sortBooks('lowToHigh');
  }

  highToLow() {
    this.sortBooks('highToLow');
  }

  newestArrivals() {
    this.sortBooks('newestArrivals');
  }
  onSearch(): void {
    this.getDisplayedBooks();
  }
}
