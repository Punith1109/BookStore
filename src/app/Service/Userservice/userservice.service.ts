import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http:HttpservicesService) { }
  loginUser(data:Object){
    return this.http.loginApi(data)
  }
  registerUser(data:Object){
    return this.http.registerApi(data);
  }
}
