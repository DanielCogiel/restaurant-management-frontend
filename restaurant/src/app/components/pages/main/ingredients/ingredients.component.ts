import { Component } from '@angular/core';
import {Crud} from "../../../../interfaces/crud.abstract";
import {IngredientModel} from "../../../../interfaces/ingredient.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent extends Crud<IngredientModel> {
  override elements: IngredientModel[] = [
    {
      id: 1,
      name: 'Papryka',
      isGluten: false
    },
    {
      id: 6,
      name: 'Pomidor',
      isGluten: false
    },
    {
      id: 3,
      name: 'Kurczak',
      isGluten: false
    },
    {
      id: 1,
      name: 'Chleb',
      isGluten: true
    },
  ]
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(router, activatedRoute)
  }
  deleteElement(event: Event, id: number) {
    event.stopPropagation();
    event.preventDefault();
    console.log(`Deleted ingredient ${id}.`);
  }
}
