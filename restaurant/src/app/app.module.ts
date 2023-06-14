import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    MealsComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
