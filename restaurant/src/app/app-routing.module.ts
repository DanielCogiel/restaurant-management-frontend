import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./components/pages/customers/customers.component";
import {OrdersComponent} from "./components/pages/orders/orders.component";
import {MealsComponent} from "./components/pages/meals/meals.component";
import {IngredientsComponent} from "./components/pages/ingredients/ingredients.component";
import {CreateEditCustomerComponent} from "./components/pages/create-edit-customer/create-edit-customer.component";
import {ViewCustomerComponent} from "./components/pages/view-customer/view-customer.component";
import {CreateEditOrderComponent} from "./components/pages/create-edit-order/create-edit-order.component";
import {ViewOrderComponent} from "./components/pages/view-order/view-order.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    children: [
      {
        path: '',
        component: CustomersComponent,
      },
      {
        path: 'create',
        component: CreateEditCustomerComponent
      },
      {
        path: ':id/edit',
        component: CreateEditCustomerComponent
      },
      {
        path: ':id',
        component: ViewCustomerComponent
      }
    ]
  },
  {
    path: 'orders',
    children: [
      {
        path: '',
        component: OrdersComponent
      },
      {
        path: 'create',
        component: CreateEditOrderComponent
      },
      {
        path: ':id/edit',
        component: CreateEditOrderComponent
      },
      {
        path: ':id',
        component: ViewOrderComponent
      }
    ]
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
