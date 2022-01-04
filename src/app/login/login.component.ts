import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private route: Router,
    private api: OrderService,
    private app: AppComponent
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  login() {
    this._http.get<any>("http://localhost:3000/user").subscribe(res => {
      const user = res.find((a: any) => {
        this.api.isLoggedIn = true;
        this.api.name = a.name;
        this.api.email = a.email;
        this.api.mobile = a.mobile;
        this.api.address = a.address;
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        // alert('You are successfully logged in');
        this.app.loggedIn = true;
        this.loginForm.reset();
        this.route.navigate(['home']);
      } else {
        alert('Email or Password is invalid');
      }
    },
      err => alert('Something is Wrong'))
  }
}
