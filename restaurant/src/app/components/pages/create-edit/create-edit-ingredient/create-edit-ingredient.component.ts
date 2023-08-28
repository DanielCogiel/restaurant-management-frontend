import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {first, map, tap} from "rxjs";
import CustomerModel from "../../../../interfaces/customer.model";
import {ApiService} from "../../../../services/api.service";
import {IngredientModel} from "../../../../interfaces/ingredient.model";

@Component({
  selector: 'app-create-edit-ingredient',
  templateUrl: './create-edit-ingredient.component.html',
  styleUrls: ['./create-edit-ingredient.component.scss']
})
export class CreateEditIngredientComponent {
  isEdit: boolean = false;
  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    gluten: [false]
  })
  loading: boolean = true;
  glutenId?: number;
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
          this.apiService.get<IngredientModel>(`/ingredients/${params['id']}`)
            .pipe(
              tap(() => this.loading = true),
              first(),
              map(response => response.body)
            )
            .subscribe(ingredient => {
              this.formGroup = this.formBuilder.group({
                name: [ingredient?.name, [Validators.required]],
                gluten: [ingredient?.gluten],
              });
              this.glutenId = ingredient?.id;
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
        this.apiService.post('/ingredients', this.formGroup.value)
          .pipe(
            first()
          )
          .subscribe(response => {
            if (response.ok && response.status === 200)
              this.router.navigate(['/ingredients']);
          })
      } else {
        this.apiService.put(`/ingredients/${this.glutenId}/edit`, this.formGroup.value)
          .pipe(
            first()
          )
          .subscribe(response => {
            if (response.ok && response.status === 200)
              this.router.navigate(['/ingredients']);
          })
      }
    }
  }
}
