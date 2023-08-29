import { Component } from '@angular/core';
import {MealModel} from "../../../../interfaces/meal.model";
import {Crud} from "../../../../interfaces/crud.abstract";
import {ActivatedRoute, Router} from "@angular/router";
import {Spiciness} from "../../../../interfaces/spiciness.enum";
import {DietType} from "../../../../interfaces/diet-type.enum";
import {HttpHeaders} from "@angular/common/http";
import {IngredientModel} from "../../../../interfaces/ingredient.model";
import {first, map, tap} from "rxjs";
import {ApiService} from "../../../../services/api.service";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent extends Crud<MealModel>{
  meals: MealModel[] | null = [];
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
    this.apiService.delete(`/meals/${id}/delete`)
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
    this.apiService.get<MealModel[]>('/meals', headers)
      .pipe(
        tap(() => this.loading = true),
        first(),
        map(response => response.body),
      )
      .subscribe(meals => {
        this.loading = false;
        this.meals = meals?.sort(
          (meal1, meal2) => meal1.id - meal2.id) || [];
      }, error => {
        console.error(error);
        this.loading = false;
      })
  }
}
