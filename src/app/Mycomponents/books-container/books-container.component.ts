import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/productservice/product.service';


interface Book{
  description:string
}

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})


export class BooksContainerComponent {
books:Book[]=[];

constructor(public productservice:ProductService){

}

ngOnInit():void{
this.productservice.getbooks().subscribe((result:any)=>{
this.books=result.result
// console.log(this.books);
console.log(this.books[0]);

})
}

// viewbook(book:any){
//   this.productservice.setbook(book); 
// }
}
