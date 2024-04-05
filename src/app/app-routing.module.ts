import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Mycomponents/login/login.component';
import { BooksContainerComponent } from './Mycomponents/books-container/books-container.component';
import { BooksComponent } from './Mycomponents/books/books.component';
import { BookstoreComponent } from './Mycomponents/bookstore/bookstore.component';
import { CartComponent } from './Mycomponents/cart/cart.component';
import { CheckoutComponent } from './Mycomponents/checkout/checkout.component';

// Import the authentication guard function
import { authGuard } from './Service/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path:"bookstore",
    component:BookstoreComponent,
    canActivate: [authGuard], // Apply authentication guard to the parent route
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
      },{
        path:'checkout',
        component:CheckoutComponent
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
