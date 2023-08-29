import { Component } from '@angular/core';
import OrderModel from "../../../../interfaces/order.model";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../services/api.service";
import {first, map, tap} from "rxjs";
import CustomerModel from "../../../../interfaces/customer.model";

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent {
  order?: OrderModel;
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.apiService.get(`/orders/${params['id']}`)
        .pipe(
          tap(() => this.loading = true),
          first(),
          map(response => response.body as OrderModel)
        )
        .subscribe(order => {
            this.order = order;
            this.loading = false;
          },
          error => this.loading = false)
    })
  }
}
