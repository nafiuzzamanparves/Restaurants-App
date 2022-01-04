import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FishComponent } from './fish/fish.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeatComponent } from './meat/meat.component';
import { OrderComponent } from './order/order.component';
import { RiceComponent } from './rice/rice.component';
import { SignupComponent } from './signup/signup.component';
import { SweetComponent } from './sweet/sweet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rice', component: RiceComponent },
  { path: 'fish', component: FishComponent },
  { path: 'meat', component: MeatComponent },
  { path: 'sweet', component: SweetComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
