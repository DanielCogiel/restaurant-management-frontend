import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../services/api.service";
import {first, map, tap} from "rxjs";
import {MealModel} from "../../../../interfaces/meal.model";
import {IngredientModel} from "../../../../interfaces/ingredient.model";

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.scss']
})
export class ViewMealComponent {
  meal?: MealModel;
  loading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.apiService.get(`/meals/${params['id']}`)
        .pipe(
          tap(() => this.loading = true),
          first(),
          map(response => response.body as MealModel)
        )
        .subscribe(meal => {
            this.meal = meal;
            this.loading = false;
          },
          error => this.loading = false)
    })
  }
}
