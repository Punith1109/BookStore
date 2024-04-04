import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/productservice/product.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedbackService } from 'src/app/Service/Feedback/feedback.service';
import { CartService } from 'src/app/Service/cartservice/cart.service';
interface Book {
  bookName: string;
  description: string;
  author: string;
  quantity: number;
  price: number;
  discountPrice: number;
  _id?: string;
}


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  bookId: string | null = null;
  books: Book[] = [];
  cartbooks:Book[]=[];
  items: number = 1;
  addBookToCart: boolean = true;
  requiredBook: Book | null = null;
  feedback: string = '';
  stars: number[] = [1, 2, 3, 4, 5];
  value:number=0;
  // bookId:string="";
  comments: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService,
    public router: Router,
    public feeedbackservice: FeedbackService,
    public cartservice:CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      console.log(this.bookId);
      this.productservice.getbooks().subscribe((result: any) => {
        this.books = result.result;
        console.log(this.books);
        this.requiredBook = this.findBookById(this.bookId);
        console.log(this.requiredBook);
      });
    });
  }
  // updateQuantity(quantity: number) {
  //   this.cartservice.updatequantity(this.bookId, quantity).subscribe((result: any) => {
  //     if (result && result.result && result.result._id) {
  //       this.cartbooks.push(result.result._id);
  //       this.addBookToCart = !this.addBookToCart;
  //       console.log(this.cartbooks);
  //     } else {
  //       console.log("No _id found in result:", result);
  //     }
  //   }, (error) => {
  //     console.log("Error occurred:", error);
  //   });
  // }

  findBookById(id: string | null): Book | null {
    if (!id) return null;
    return this.books.find((book) => book._id === id) || null;
  }

setValue(star:number){
  this.value=star;
}


  submitfeedback() {

    const feedbackobj={
      "comment":this.feedback,
      "rating":this.value,
      
    }
    if(this.bookId){
      this.feeedbackservice.sendfeedback(this.bookId, feedbackobj).subscribe((result:any)=>{
        this.books=result.result;
        console.log(this.books);
        
      });}
      this.getFeedback()
    
  }

  getFeedback() {
    if (this.bookId) {
      this.feeedbackservice.getFeedback(this.bookId).subscribe((result: any) => {
        // Assuming 'result.result' contains an array of comments
        alert(result.result.user_id)
        if (result && result.result) {
          this.comments = result.result.map((comment: any) => ({
            userInitials: typeof comment.user_id === 'string' ? comment.user_id.substr(0, 2).toUpperCase() : '',
            rating: comment.rating,
            comment: comment.comment
          }));
        }
      });
    }
    console.log(this.comments);
    
  }

  getRange(value: number): number[] {
    return Array(value).fill(0).map((_, index) => index);
  }

  toggleButton () {
    this.addBookToCart = !this.addBookToCart;
  }
  addToCart() {    
    if (this.bookId) {    
      this.cartservice.addToCart(this.bookId).subscribe((result:any)=>{   
        if(result && result.result && result.result._id) {
          this.cartbooks.push(result.result._id); 
          this.addBookToCart = !this.addBookToCart;
          console.log(this.cartbooks);
        } else {
          console.log("No _id found in result:", result);
        }
      },
      (error)=>{
        console.log("Error occurred:", error);
      });
    } else {
      console.log("No bookId found.");
    }
  }
  
}
