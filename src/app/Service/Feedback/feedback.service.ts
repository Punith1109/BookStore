import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl: string ="https://bookstore.incubation.bridgelabz.com"
  token:any = localStorage.getItem('token');

  constructor(public httpservice:HttpservicesService, public http:HttpClient) { }


  sendfeedback(id:string, feedback:Object){
    let httpHeadersOption={
      headers: new HttpHeaders({
        contentType: 'application/json',
        token: this.token,
      }),
    };
    return this.http.post(`${this.baseUrl}/bookstore_user/add/feedback/${id}`,feedback,true && httpHeadersOption);
  }
  getFeedback(id: string) {
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        token: this.token,
      }),
    };
    return this.http.get(`${this.baseUrl}/bookstore_user/get/feedback/${id}`, httpHeadersOption);
  }
}
