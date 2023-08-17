import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {first, map, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../services/api.service";
import CustomerModel from "../../../../interfaces/customer.model";
@Component({
  selector: 'app-create-edit-customer',
  templateUrl: './create-edit-customer.component.html',
  styleUrls: ['./create-edit-customer.component.scss']
})
export class CreateEditCustomerComponent {
  loading: boolean = true;
  isEdit: boolean = false;
  customerId?: number;
  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    table_number: [1, [Validators.required]]
  })
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
          this.apiService.get<CustomerModel>(`/customers/${params['id']}`)
            .pipe(
              tap(() => this.loading = true),
              first(),
              map(response => response.body)
            )
            .subscribe(customer => {
              this.formGroup = this.formBuilder.group({
                name: [customer?.name, [Validators.required]],
                surname: [customer?.surname, [Validators.required]],
                table_number: [customer?.table_number, [Validators.required]]
              });
              this.customerId = customer?.id;
              this.loading = false;
            }, error => this.loading = false)
        }
      })
  }
  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.isEdit) {
        this.apiService.post('/customers', this.formGroup.value)
          .pipe(
            first()
          )
          .subscribe(response => {
            if (response.ok && response.status === 200)
              this.router.navigate(['/customers']);
          })
      } else {
        this.apiService.put('/customers', {
          id: this.customerId,
          ...this.formGroup.value
        })
          .pipe(
            first()
          )
          .subscribe(response => {
            if (response.ok && response.status === 200)
              this.router.navigate(['/customers']);
          })
      }
    }
  }
}
