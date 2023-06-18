import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { HeaderComponent } from './components/header/header.component';
import { IngredientsComponent } from './components/pages/main/ingredients/ingredients.component';
import { MealsComponent } from './components/pages/main/meals/meals.component';
import { CustomersComponent } from './components/pages/main/customers/customers.component';
import { OrdersComponent } from './components/pages/main/orders/orders.component';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import { CreateEditCustomerComponent } from './components/pages/create-edit/create-edit-customer/create-edit-customer.component';
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import { ViewCustomerComponent } from './components/pages/view/view-customer/view-customer.component';
import { CreateEditOrderComponent } from './components/pages/create-edit/create-edit-order/create-edit-order.component';
import { ViewOrderComponent } from './components/pages/view/view-order/view-order.component';
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateEditIngredientComponent } from './components/pages/create-edit/create-edit-ingredient/create-edit-ingredient.component';
import { ViewIngredientComponent } from './components/pages/view/view-ingredient/view-ingredient.component';
import {CheckboxModule} from "primeng/checkbox";
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
    ViewOrderComponent,
    CreateEditIngredientComponent,
    ViewIngredientComponent
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
    BrowserAnimationsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
