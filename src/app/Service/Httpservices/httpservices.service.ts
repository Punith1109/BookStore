import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  baseUrl: string="https://bookstore.incubation.bridgelabz.com/"
private authHeader= new HttpHeaders({
  'Accept': "application/json",
  Authorization:localStorage.getItem("token") || " "
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
}
