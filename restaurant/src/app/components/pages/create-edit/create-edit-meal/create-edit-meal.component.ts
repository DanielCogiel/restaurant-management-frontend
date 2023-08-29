import {ChangeDetectorRef, Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {first, map, Observable, tap} from "rxjs";
import {IngredientModel} from "../../../../interfaces/ingredient.model";
import {SpicinessLevel} from "../../../../interfaces/spiciness.enum";
import {DietTypeEnum} from "../../../../interfaces/diet-type.enum";
import CustomerModel from "../../../../interfaces/customer.model";
import {ApiService} from "../../../../services/api.service";
import {Unit} from "../../../../interfaces/unit.enum";
import {MealModel} from "../../../../interfaces/meal.model";
@Component({
  selector: 'app-create-edit-meal',
  templateUrl: './create-edit-meal.component.html',
  styleUrls: ['./create-edit-meal.component.scss']
})
export class CreateEditMealComponent {
  isEdit: boolean = false;
  mealId?: number;
  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    spiciness: [SpicinessLevel.LOW, [Validators.required]],
    dietType: [DietTypeEnum.REGULAR, [Validators.required]],
    ingredients: new FormArray([], [Validators.required])
  })
  loading: boolean = true;
  ingredients$: Observable<IngredientModel[]> = this.apiService
    .get<CustomerModel[]>('/ingredients')
    .pipe(
      tap(() => this.loading = true),
      first(),
      map((response: any) => response.body),
      map((ingredients: IngredientModel[]) => ingredients
        .sort((ing1, ing2) => ing1.id - ing2.id)),
      tap(() => this.loading = false),
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
          this.apiService.get<MealModel>(`/meals/${params['id']}`)
            .pipe(
              tap(() => this.loading = true),
              first(),
              map(response => response.body)
            )
            .subscribe(meal => {
              this.formGroup = this.formBuilder.group({
                name: [meal?.name, [Validators.required]],
                spiciness: [meal?.spiciness, [Validators.required]],
                dietType: [meal?.dietType, [Validators.required]]
              });
              this.mealId = meal?.id;
              this.loading = false;
            }, error => this.loading = false)
        } else {
          this.loading = false;
        }
      })
  }
  get ingredients() {
    return (this.formGroup.controls['ingredients'] as FormArray).controls as FormGroup[];
  }
  getSpicinessLevels() {
    return Object.values(SpicinessLevel);
  }
  getDietTypes() {
    return Object.values(DietTypeEnum);
  }
  getUnits() {
    return Object.values(Unit);
  }
  onSubmit() {
      if (!this.isEdit) {
        this.apiService.post('/meals', this.formGroup.value)
          .pipe(
            first()
          )
          .subscribe(response => {
            if (response.ok && response.status === 200)
              this.router.navigate(['/meals']);
          })
      } else {
      this.apiService.put(`/meals/${this.mealId}/edit`, this.formGroup.value)
        .pipe(
          first()
        )
        .subscribe(response => {
          if (response.ok && response.status === 200)
            this.router.navigate(['/meals']);
        })
      }
  }
  addNewIngredient() {
    let array = this.formGroup.controls['ingredients'] as FormArray;
    array.push(new FormGroup({
      ingredientId: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      unit: new FormControl(null, [Validators.required])
    }))
    console.log(this.formGroup.value)
  }
  removeIngredient(id: number) {
    let array = this.formGroup.controls['ingredients'] as FormArray;
    array.removeAt(id);
  }

  protected readonly FormGroup = FormGroup;
}
