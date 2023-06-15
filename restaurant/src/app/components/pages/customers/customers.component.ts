import { Component } from '@angular/core';
import CustomerModel from "../../../interfaces/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Crud} from "../../../interfaces/crud.abstract";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends Crud<CustomerModel>{
  override elements: CustomerModel [] = [
    {
      id: 1,
      name: "Daniel",
      surname: "Nowak",
      table_number: 2,
      orders: []
    },
    {
      id: 2,
      name: "Jan",
      surname: "Kowalski",
      table_number: 5,
      orders: []
    },
    {
      id: 1,
      name: "Daniel",
      surname: "Nowak",
      table_number: 2,
      orders: []
    },
    {
      id: 2,
      name: "Jan",
      surname: "Kowalski",
      table_number: 5,
      orders: []
    },
    {
      id: 1,
      name: "Daniel",
      surname: "Nowak",
      table_number: 2,
      orders: []
    },
    {
      id: 2,
      name: "Jan",
      surname: "Kowalski",
      table_number: 5,
      orders: []
    },
    {
      id: 1,
      name: "Daniel",
      surname: "Nowak",
      table_number: 2,
      orders: []
    },
    {
      id: 2,
      name: "Jan",
      surname: "Kowalski",
      table_number: 5,
      orders: []
    },
    {
      id: 1,
      name: "Daniel",
      surname: "Nowak",
      table_number: 2,
      orders: []
    },
    {
      id: 2,
      name: "Jan",
      surname: "Kowalski",
      table_number: 5,
      orders: []
    }
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
    console.log(`Deleted customer ${id}.`);
  }
}
