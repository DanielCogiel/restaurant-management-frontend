import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./components/pages/main/customers/customers.component";
import {OrdersComponent} from "./components/pages/main/orders/orders.component";
import {MealsComponent} from "./components/pages/main/meals/meals.component";
import {IngredientsComponent} from "./components/pages/main/ingredients/ingredients.component";
import {CreateEditCustomerComponent} from "./components/pages/create-edit/create-edit-customer/create-edit-customer.component";
import {ViewCustomerComponent} from "./components/pages/view/view-customer/view-customer.component";
import {CreateEditOrderComponent} from "./components/pages/create-edit/create-edit-order/create-edit-order.component";
import {ViewOrderComponent} from "./components/pages/view/view-order/view-order.component";
import {CreateEditIngredientComponent} from "./components/pages/create-edit/create-edit-ingredient/create-edit-ingredient.component";
import {ViewIngredientComponent} from "./components/pages/view/view-ingredient/view-ingredient.component";
import {CreateEditMealComponent} from "./components/pages/create-edit/create-edit-meal/create-edit-meal.component";
import {ViewMealComponent} from "./components/pages/view/view-meal/view-meal.component";

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
    children: [
      {
        path: '',
        component: MealsComponent
      },
      {
        path: 'create',
        component: CreateEditMealComponent
      },
      {
        path: ':id/edit',
        component: CreateEditMealComponent
      },
      {
        path: ':id',
        component: ViewMealComponent
      },
    ]
  },
  {
    path: 'ingredients',
    children: [
      {
        path: '',
        component: IngredientsComponent
      },
      {
        path: 'create',
        component: CreateEditIngredientComponent
      },
      {
        path: ':id/edit',
        component: CreateEditIngredientComponent
      },
      {
        path: ':id',
        component: ViewIngredientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
