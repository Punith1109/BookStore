import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  baseUrl: string="https://bookstore.incubation.bridgelabz.com/"
private authHeader= new HttpHeaders({
  'Accept': "application/json",
  token:localStorage.getItem("token") || " "
})
  constructor(public http:HttpClient) { }

  loginApi(data:Object){
    return this.http.post(`${this.baseUrl}/bookstore_user/login`,data)
  }

  registerApi(data:Object){
    return this.http.post(`${this.baseUrl}/bookstore_user/registration`,data);
  }

  getbookAPi() {
    return this.http.get(`${this.baseUrl}/bookstore_user/get/book`);
}

postfeedbackapi(id:string, data:Object){
  
 return this.http.post(`${this.baseUrl}/bookstore_user/add/feedback/${id}`,data, {headers:this.authHeader});
}



addCart(id: string){
  return this.http.post(`${this.baseUrl}/bookstore_user/add_cart_item/${id}`,{}, {headers:this.authHeader})
}

 removebook(id :string){
  return this.http.delete(`${this.baseUrl}/bookstore_user/remove_cart_item/${id}`,{headers:this.authHeader})
 }
 getcartbooks(){
  return this.http.get(`${this.baseUrl}/bookstore_user/get_cart_items`,{headers:this.authHeader})
 }
 updateCartQuantity(id:string,data:any){
  return this.http.put(`${this.baseUrl}/cart_item_quantity/${id}`,data,{headers:this.authHeader});
}
}
