import { Component } from '@angular/core';
import OrderModel from "../../../interfaces/order.model";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent {
  order?: OrderModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.order = {
        id: params['id'],
        customer: {
          id: 1,
          name: 'Daniel',
          surname: 'Nowak',
          table_number: 5
        },
        meals: [
          {
            id: 2,
            name: 'Kaszanka',
            spiciness: "Low",
            dietType: "Regular"
          },
          {
            id: 5,
            name: 'Rosół',
            spiciness: "Low",
            dietType: "Regular"
          }
        ]
      }
    })
  }
}
