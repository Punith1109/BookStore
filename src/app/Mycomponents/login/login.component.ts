import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserserviceService } from 'src/app/Service/Userservice/userservice.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  RegistrationForm: FormGroup;
  submitted: boolean = false;
  usubmitted:boolean=false;
  usersubmited: boolean = false;
  Email: string = '';
  password: String = '';
  useremail: string = '';
  fullname: string = '';
  userpassword: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public userservice: UserserviceService,
    public router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.RegistrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      useremail: ['', Validators.required],
      userpassword: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls as { [key: string]: any };
  }
  get k(){
    return this.RegistrationForm.controls as{[key :string]:any}  }

  loginUser() {
    this.submitted = true;
    const { email, password } = this.loginForm.value;
    this.userservice
      .loginUser({
        "email": email,
        "password": password,
        // "accessToken":"accessToken"
      })
      .subscribe((result:any) => {
        localStorage.setItem("token",result.result.accessToken);
        console.log(result.result.accessToken);
        this.router.navigate(['/bookstore/dashboard'])
      });
  }

  registerUser() {
    this.usubmitted = true;
    if (this.RegistrationForm.invalid) {
      return;
    }
    const { fullname, useremail, userpassword, phone } =
      this.RegistrationForm.value;
    console.log({ fullname, useremail, userpassword, phone });

    this.userservice
      .registerUser({
        fullName: fullname,
        email: useremail,
        password: userpassword,
        phone: phone,
        service: 'advance',
      })
      .subscribe((result) => {
        console.log(result);
        this.router.navigate(['']);
      });
  }
}
