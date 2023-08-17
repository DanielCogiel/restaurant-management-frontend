import { Component } from '@angular/core';
import {MealModel} from "../../../../interfaces/meal.model";
import {Crud} from "../../../../interfaces/crud.abstract";
import {ActivatedRoute, Router} from "@angular/router";
import {Spiciness} from "../../../../interfaces/spiciness.enum";
import {DietType} from "../../../../interfaces/diet-type.enum";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent extends Crud<MealModel>{
  elements: MealModel[] = [
    {
      id: 1,
      name: 'Potrawka',
      spiciness: "Medium",
      dietType: "Regular"
    },
    {
      id: 3,
      name: 'Ramen',
      spiciness: "High",
      dietType: "Vegetarian"
    },
    {
      id: 5,
      name: 'Pizza Vege',
      spiciness: "Low",
      dietType: "Vegan"
    },
    {
      id: 2,
      name: 'Hamburger',
      spiciness: "Low",
      dietType: "Regular"
    }
  ]
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(router, activatedRoute)
  }
  override deleteElement(event: Event, id: number) {
    event.stopPropagation();
    event.preventDefault();
    console.log(`Deleted meal number ${id}`)
  }
}
