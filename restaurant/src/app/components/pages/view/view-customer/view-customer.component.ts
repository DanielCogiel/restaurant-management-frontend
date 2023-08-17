import { Component } from '@angular/core';
import CustomerModel from "../../../../interfaces/customer.model";
import {ApiService} from "../../../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {first, map, tap} from "rxjs";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent {
  customer?: CustomerModel
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.apiService.get(`/customers/${params['id']}`)
        .pipe(
          tap(() => this.loading = true),
          first(),
          map(response => response.body as CustomerModel)
        )
        .subscribe(customer => {
          this.customer = customer;
          this.loading = false;
          },
          error => this.loading = false)
    })
  }
}
