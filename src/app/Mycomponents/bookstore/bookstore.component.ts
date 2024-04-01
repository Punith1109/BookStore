import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent {

  constructor(private router: Router) {}

  goToCartPage(): void {
    this.router.navigate(['/bookstore/cart']); 
  }
}
