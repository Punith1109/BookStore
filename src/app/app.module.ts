import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksContainerComponent } from './Mycomponents/books-container/books-container.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BooksComponent } from './Mycomponents/books/books.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BookstoreComponent } from './Mycomponents/bookstore/bookstore.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CartComponent } from './Mycomponents/cart/cart.component';
import {MatSelectModule} from '@angular/material/select';
import { CheckoutComponent } from './Mycomponents/checkout/checkout.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    BookstoreComponent,
    BooksContainerComponent,
    LoginComponent,
    BooksComponent,
    BookstoreComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
