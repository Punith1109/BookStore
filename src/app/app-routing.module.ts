import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Mycomponents/login/login.component';
import { BooksContainerComponent } from './Mycomponents/books-container/books-container.component';

const routes: Routes = [
{
  path:"",
  component:LoginComponent
},{
  path:"dashboard",
  component:BooksContainerComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
