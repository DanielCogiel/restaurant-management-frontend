import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {first} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-create-edit-customer',
  templateUrl: './create-edit-customer.component.html',
  styleUrls: ['./create-edit-customer.component.scss']
})
export class CreateEditCustomerComponent {
  isEdit: boolean = false;
  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    table_number: [1, [Validators.required]]
  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute
      .params
      .pipe(first())
      .subscribe((params: Params) => {
        if (params['id']) {
          this.isEdit = true;
          this.formGroup = this.formBuilder.group({
            name: ['Daniel', [Validators.required]],
            surname: ['Nowak', [Validators.required]],
            table_number: [2, [Validators.required]]
          });
        }
      })
  }
  onSubmit() {
    if (this.formGroup.valid)
      console.log(this.formGroup.value)
  }
}
