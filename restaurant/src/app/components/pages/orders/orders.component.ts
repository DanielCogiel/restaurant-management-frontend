import { Component } from '@angular/core';
import OrderModel from "../../../interfaces/order.model";
import {Crud} from "../../../interfaces/crud.abstract";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends Crud<OrderModel> {
  override elements: OrderModel[] = [
    {
      id: 1,
      customer: {
        id: 8,
        name: 'Jan',
        surname: 'Kowalski',
        table_number: 6
      },
      meals: []
    },
    {
      id: 2,
      customer: {
        id: 3,
        name: 'Marian',
        surname: 'Logiczny',
        table_number: 2
      },
      meals: []
    },
    {
      id: 3,
      customer: {
        id: 1,
        name: 'Andrzej',
        surname: 'Nowak',
        table_number: 7
      },
      meals: []
    },
  ]
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(router, activatedRoute)
  }
  deleteElement(event: Event, id: number) {
    event.stopPropagation();
    event.preventDefault();
    console.log(`Deleted order ${id}.`);
  }
}
