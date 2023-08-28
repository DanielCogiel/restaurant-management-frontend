import { Component } from '@angular/core';
import {IngredientModel} from "../../../../interfaces/ingredient.model";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../services/api.service";
import {first, map, tap} from "rxjs";
import CustomerModel from "../../../../interfaces/customer.model";

@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.scss']
})
export class ViewIngredientComponent {
  ingredient?: IngredientModel;
  loading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.apiService.get(`/ingredients/${params['id']}`)
        .pipe(
          tap(() => this.loading = true),
          first(),
          map(response => response.body as IngredientModel)
        )
        .subscribe(ingredient => {
            this.ingredient = ingredient;
            this.loading = false;
          },
          error => this.loading = false)
    })
  }
}
