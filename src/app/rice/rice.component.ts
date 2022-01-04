import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.css']
})
export class RiceComponent implements OnInit {

  
  constructor(private router:Router, private api:OrderService) { }

  ngOnInit(): void {
  }

  go(){
    this.router.navigate(['/order']);
  }

  goOrder(fname:string, price:number){
    this.api.fname = fname;
    this.api.price = price;
    this.router.navigate(['/order']);
  }
}
