import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {first, map, Observable, tap} from "rxjs";
import CustomerModel from "../../../../interfaces/customer.model";
import {MealModel} from "../../../../interfaces/meal.model";
import {HttpResponse} from "@angular/common/http";
import {ApiService} from "../../../../services/api.service";
import OrderModel from "../../../../interfaces/order.model";
@Component({
  selector: 'app-create-edit-order',
  templateUrl: './create-edit-order.component.html',
  styleUrls: ['./create-edit-order.component.scss']
})
export class CreateEditOrderComponent {
  isEdit: boolean = false;
  loading: boolean = true;
  orderId?: number;
  formGroup: FormGroup = this.formBuilder.group({
    userId: ['', [Validators.required]],
    meals: new FormControl<number[] | null>(null, [Validators.required])
  })
  customers$: Observable<CustomerModel[]> = this.apiService
    .get<CustomerModel[]>('/customers')
    .pipe(
      tap(() => this.loading = true),
      first(),
      map((response: any) => response.body),
      map((customers: CustomerModel[]) => customers
        .sort((cust1, cust2) => cust1.id - cust2.id)),
      tap(() => this.loading = false),
    )

  meals$: Observable<MealModel[]> = this.apiService
    .get<MealModel[]>('/meals')
    .pipe(
      tap(() => this.loading = true),
      first(),
      map((response: any) => response.body),
      map((meals: MealModel[]) => meals
        .sort((meal1, meal2) => meal1.id - meal2.id)),
      tap(() => this.loading = false)
    )
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.activatedRoute
      .params
      .pipe(first())
      .subscribe((params: Params) => {
        if (params['id']) {
          this.isEdit = true;
          this.apiService.get<OrderModel>(`/orders/${params['id']}`)
            .pipe(
              tap(() => this.loading = true),
              first(),
              map(response => response.body)
            )
            .subscribe(order => {
              let mealIds = order?.meals?.map(meal => meal.id);
              this.formGroup = this.formBuilder.group({
                userId: [order?.customerId, [Validators.required]],
                meals: new FormControl<number[] | null>(mealIds || null, [Validators.required])
              });
              this.orderId = order?.id;
              this.loading = false;
            }, error => this.loading = false)
        } else {
          this.loading = false;
        }
      })
  }
  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.isEdit) {
        this.apiService.post('/orders', this.formGroup.value)
          .pipe(
            first()
          )
          .subscribe(response => {
            if (response.ok && response.status === 200)
              this.router.navigate(['/orders']);
          })
      } else {
        this.apiService.put(`/orders/${this.orderId}/edit`, {
          meals: this.formGroup.value.meals,
          customer: this.formGroup.value.userId
        })
          .pipe(
            first()
          )
          .subscribe(response => {
            if (response.ok && response.status === 200)
              this.router.navigate(['/orders']);
          })
      }
    }
  }
}
