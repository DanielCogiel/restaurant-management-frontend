import { Component } from '@angular/core';
import CustomerModel from "../../../interfaces/customer.model";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers: CustomerModel [] = [
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
}
