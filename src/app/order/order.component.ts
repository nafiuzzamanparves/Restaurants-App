import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../shared/order.service';
import { OrderData } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  formValue: FormGroup;
  orderObj: OrderData = new OrderData;
  total: number = 1;

  constructor(private formBuilder: FormBuilder, private api: OrderService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      fname: [''],
      price: [''],
      qnt: [''],
      total: ['']
    });

    this.formValue.controls['name'].setValue(this.api.name);
    this.formValue.controls['email'].setValue(this.api.email);
    this.formValue.controls['mobile'].setValue(this.api.mobile);
    this.formValue.controls['address'].setValue(this.api.address);
    this.formValue.controls['fname'].setValue(this.api.fname);
    this.formValue.controls['price'].setValue(this.api.price);
  }

  addOrder() {

    this.orderObj.name = this.formValue.value.name;
    this.orderObj.email = this.formValue.value.email;
    this.orderObj.mobile = this.formValue.value.mobile;
    this.orderObj.address = this.formValue.value.address;
    this.orderObj.fname = this.formValue.value.fname;
    this.orderObj.price = this.formValue.value.price;
    this.orderObj.qtn = this.formValue.value.qnt;
    this.orderObj.total = this.formValue.value.total;

    if (this.orderObj.name == undefined || this.orderObj.email == undefined || this.orderObj.mobile == undefined || this.orderObj.address == undefined || this.orderObj.fname == undefined || this.orderObj.price == undefined || this.orderObj.qtn == undefined || this.orderObj.total == undefined) {
      alert('Field can not be empty');
    } else {
      this.api.postOrder(this.orderObj).subscribe((res) => {
        console.log(res);
        alert('Your order has been successfully placed');
        console.log(this.total);
        this.formValue.reset();
      },
        error => { alert('Something is wrong') }
      )
    }
  }

  multiplication(a: any, b: any) {
    const num1 = Number(a);
    const num2 = Number(b);
    this.total = a * b;
    this.formValue.controls['total'].setValue(this.total);
  }
}
