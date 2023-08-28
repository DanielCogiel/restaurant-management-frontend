import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../services/api.service";
import {first} from "rxjs";
import {MealModel} from "../../../../interfaces/meal.model";

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.scss']
})
export class ViewMealComponent {
  meal?: MealModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.meal = {
        id: params['id'],
        name: 'Pizza Margherita',
        spiciness: "Medium",
        dietType: "Vegetarian",
        ingredients: [
          // {
          //   id: 1,
          //   name: "Ser",
          //   isGluten: false
          // },
          // {
          //   id: 3,
          //   name: "Pomidor",
          //   isGluten: false
          // }
        ]
      }
    })
  }
}
