import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {first} from "rxjs";
import CustomerModel from "../../../../interfaces/customer.model";
import {MealModel} from "../../../../interfaces/meal.model";

@Component({
  selector: 'app-create-edit-order',
  templateUrl: './create-edit-order.component.html',
  styleUrls: ['./create-edit-order.component.scss']
})
export class CreateEditOrderComponent {
  isEdit: boolean = false;
  formGroup: FormGroup = this.formBuilder.group({
    userId: ['', [Validators.required]],
    meals: new FormControl<MealModel[] | null>(null, [Validators.required])
  })
  customers: CustomerModel[] = [
    {
      id: 8,
      name: 'Jan',
      surname: 'Kowalski',
      table_number: 3
    },
    {
      id: 5,
      name: 'Daniel',
      surname: 'Nowak',
      table_number: 5
    }
  ]
  meals: MealModel[] = [
    {
      id: 1,
      name: 'Kaszanka',
      dietType: "Regular",
      spiciness: "Low"
    },
    {
      id: 4,
      name: 'Pomidorowa',
      dietType: "Vegan",
      spiciness: "Medium"
    },
    {
      id: 6,
      name: 'Kebab',
      dietType: "Regular",
      spiciness: "High"
    },
  ]
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
            userId: ['5', [Validators.required]],
            meals: new FormControl<MealModel[] | null>([
              {
                id: 1,
                name: 'Kaszanka',
                dietType: 'Regular',
                spiciness: "Low"
              },
              {
                id: 4,
                name: 'Pomidorowa',
                dietType: 'Vegan',
                spiciness: "Medium"
              }
            ], [Validators.required])
          });
        }
      })
  }
  onSubmit() {
    if (this.formGroup.valid)
      console.log(this.formGroup.value)
  }
}
