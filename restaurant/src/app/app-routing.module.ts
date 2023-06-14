import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./components/pages/customers/customers.component";
import {OrdersComponent} from "./components/pages/orders/orders.component";
import {MealsComponent} from "./components/pages/meals/meals.component";
import {IngredientsComponent} from "./components/pages/ingredients/ingredients.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'meals',
    component: MealsComponent
  },
  {
    path: 'ingredients',
    component: IngredientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
