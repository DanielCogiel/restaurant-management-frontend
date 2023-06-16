import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { HeaderComponent } from './components/header/header.component';
import { IngredientsComponent } from './components/pages/ingredients/ingredients.component';
import { MealsComponent } from './components/pages/meals/meals.component';
import { CustomersComponent } from './components/pages/customers/customers.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import { CreateEditCustomerComponent } from './components/pages/create-edit-customer/create-edit-customer.component';
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import { ViewCustomerComponent } from './components/pages/view-customer/view-customer.component';
import { CreateEditOrderComponent } from './components/pages/create-edit-order/create-edit-order.component';
import { ViewOrderComponent } from './components/pages/view-order/view-order.component';
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    MealsComponent,
    CustomersComponent,
    OrdersComponent,
    CreateEditCustomerComponent,
    ViewCustomerComponent,
    CreateEditOrderComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    RippleModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
