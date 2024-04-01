import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Mycomponents/login/login.component';
import { BooksContainerComponent } from './Mycomponents/books-container/books-container.component';
import { BooksComponent } from './Mycomponents/books/books.component';
import { BookstoreComponent } from './Mycomponents/bookstore/bookstore.component';
import { CartComponent } from './Mycomponents/cart/cart.component';
const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path:"bookstore",
    component:BookstoreComponent,
    children:[
      {
        path:"dashboard",
        component:BooksContainerComponent
      },
      {
        path:"books/:id",
        component:BooksComponent
      },{
        path:"cart",
        component:CartComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }