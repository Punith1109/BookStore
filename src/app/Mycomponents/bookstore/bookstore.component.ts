import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Service/searchservice/search.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent {
  searchQuery:string=''

  constructor(private router: Router,private searchService: SearchService) {}

  ngOnInit():void{
    
  }

  goToCartPage(): void {
    this.router.navigate(['/bookstore/cart']); 
  }
  updateSearch(): void {
    this.searchService.setSearchQuery(this.searchQuery);
  }
  bookstore(){
    this.router.navigate(['/bookstore/dashboard'])
  }

  logout(){
    this.router.navigate(['localhost:4200'])
    alert(localStorage.getItem('token'))
    localStorage.removeItem('token')
  }
}
