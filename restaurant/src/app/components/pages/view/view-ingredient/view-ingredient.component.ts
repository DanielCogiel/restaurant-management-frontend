import { Component } from '@angular/core';
import {IngredientModel} from "../../../../interfaces/ingredient.model";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../../services/api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.scss']
})
export class ViewIngredientComponent {
  ingredient?: IngredientModel
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.ingredient = {
        id: params['id'],
        name: 'Papryka',
        isGluten: false
      }
    })
  }
}
