import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/productservice/product.service';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
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
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
    });
  }

}
