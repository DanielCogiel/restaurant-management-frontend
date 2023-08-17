import {ChangeDetectorRef, Component} from '@angular/core';
import CustomerModel from "../../../../interfaces/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Crud} from "../../../../interfaces/crud.abstract";
import {BehaviorSubject, combineLatest, first, map, Observable, switchMap, tap} from "rxjs";
import {ApiService} from "../../../../services/api.service";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends Crud<CustomerModel>{
  customers: CustomerModel[] | null = [];
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
    this.apiService.delete(`/customers/${id}/delete`)
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
    this.apiService.get<CustomerModel[]>('/customers', headers)
      .pipe(
        tap(() => this.loading = true),
        first(),
        map(response => response.body),
      )
      .subscribe(customers => {
        this.loading = false;
        this.customers = customers;
      }, error => {
        console.error(error);
        this.loading = false;
      })
  }
}
