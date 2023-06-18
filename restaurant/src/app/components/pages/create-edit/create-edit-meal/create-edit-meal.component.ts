import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {first} from "rxjs";
import {IngredientModel} from "../../../../interfaces/ingredient.model";
import {SpicinessLevel} from "../../../../interfaces/spiciness.enum";
import {DietTypeEnum} from "../../../../interfaces/diet-type.enum";
@Component({
  selector: 'app-create-edit-meal',
  templateUrl: './create-edit-meal.component.html',
  styleUrls: ['./create-edit-meal.component.scss']
})
export class CreateEditMealComponent {
  isEdit: boolean = false;
  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    spiciness: [SpicinessLevel.LOW, [Validators.required]],
    dietType: [DietTypeEnum.REGULAR, [Validators.required]],
    ingredients: new FormControl<IngredientModel[] | null>(null, [Validators.required])
  })
  ingredients: IngredientModel[] = [
    {
      id: 1,
      name: "Kasza",
      isGluten: false
    },
    {
      id: 3,
      name: "Mięso",
      isGluten: false
    },
    {
      id: 4,
      name: "Chleb",
      isGluten: true
    }
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
            name: ['Kaszanka', [Validators.required]],
            spiciness: [SpicinessLevel.LOW, [Validators.required]],
            dietType: [DietTypeEnum.REGULAR, [Validators.required]],
            ingredients: [[
              {
                id: 1,
                name: "Kasza",
                isGluten: false
              },
              {
                id: 3,
                name: "Mięso",
                isGluten: false
              }
            ], [Validators.required]]
          });
        }
      })
  }
  getSpicinessLevels() {
    return Object.values(SpicinessLevel);
  }
  getDietTypes() {
    return Object.values(DietTypeEnum);
  }
  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value)
    }
  }
}
