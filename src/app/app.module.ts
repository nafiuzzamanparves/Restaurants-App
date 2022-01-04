import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiceComponent } from './rice/rice.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { MeatComponent } from './meat/meat.component';
import { SweetComponent } from './sweet/sweet.component';
import { FishComponent } from './fish/fish.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RiceComponent,
    HomeComponent,
    OrderComponent,
    MeatComponent,
    SweetComponent,
    FishComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
