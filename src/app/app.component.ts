import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from './shared/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private api: OrderService
  ) { }

  showSlider: boolean;
  loggedIn: boolean;
  name = '';

  ngOnInit() {

  }

  disSlider() {
    this.showSlider = true;
  }

  noSlider() {
    this.showSlider = false;
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }

  logout(){
    this.loggedIn = false;
  }

  dis() {
    console.log(`value of LoggedIn in app component ${this.loggedIn} from app.component.ts`);
    console.log(`value of isLoggedIn in service is ${this.api.isLoggedIn} from app.component.ts`);
    console.log(`value of name is ${this.api.name} from app.component.ts`);
    console.log(`value of email is ${this.api.email} from app.component.ts`);
    console.log(`value of mobile is ${this.api.mobile} from app.component.ts`);
    console.log(`value of address is ${this.api.address} from app.component.ts`);
  }
}
