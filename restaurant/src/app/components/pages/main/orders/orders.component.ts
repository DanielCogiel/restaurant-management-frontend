import { Component } from '@angular/core';
import OrderModel from "../../../../interfaces/order.model";
import {Crud} from "../../../../interfaces/crud.abstract";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../../services/api.service";
import {first, map, tap} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends Crud<OrderModel> {
  orders: OrderModel[] | null = [];
  loading: boolean = true;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    super(router, activatedRoute);
    this.refresh();
  }
  deleteElement(event: Event, id: number) {
    event.stopPropagation();
    event.preventDefault();
    this.apiService.delete(`/orders/${id}/delete`)
      .pipe(
        tap(() => this.loading = true),
        first()
      )
      .subscribe(response => {
        if (response.ok && response.status === 200) {
          this.refresh();
        } else {
          this.loading = false;
        }
      })
  }
  refresh() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.apiService.get<OrderModel[]>('/orders', headers)
      .pipe(
        tap(() => this.loading = true),
        first(),
        map(response => response.body),
      )
      .subscribe(orders => {
        this.loading = false;
        this.orders = orders?.sort(
          (order1, order2) => order1.id - order2.id) || [];
      }, error => {
        console.error(error);
        this.loading = false;
      })
  }
}
