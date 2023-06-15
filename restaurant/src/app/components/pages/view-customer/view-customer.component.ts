import { Component } from '@angular/core';
import CustomerModel from "../../../interfaces/customer.model";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent {
  customer?: CustomerModel

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.customer = {
        id: params['id'],
        name: 'Daniel',
        surname: 'Nowak',
        table_number: 3,
        orders: [
          {
            id: 1
          },
          {
            id: 2
          }
        ]
      }
    })
  }
}
