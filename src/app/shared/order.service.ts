import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public isLoggedIn:boolean = false;
  public name:string;
  public email:string;
  public mobile:string;
  public address:string;
  public fname:string;
  public price:number;

  constructor(private _http: HttpClient) { }

  // Create 
  postOrder(data: any) {
    return this._http.post<any>("http://localhost:3000/order", data).pipe(map((res: any) => {
      return res;
    }))
  }

  // Get All 
  getOrder() {
    return this._http.get<any>("http://localhost:3000/order").pipe(map((res: any) => {
      return res;
    }))
  }

  // Update 
  updateOrder(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/order/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  // Delete 
  deleteOrder(id: number) {
    return this._http.delete<any>("http://localhost:3000/order/" + id,).pipe(map((res: any) => {
      return res;
    }))
  }


  postFeedback(data: any) {
    return this._http.post<any>("http://localhost:3000/feedback", data)
  }
}
