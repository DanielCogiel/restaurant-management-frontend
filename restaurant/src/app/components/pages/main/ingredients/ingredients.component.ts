import { Component } from '@angular/core';
import {Crud} from "../../../../interfaces/crud.abstract";
import {IngredientModel} from "../../../../interfaces/ingredient.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import CustomerModel from "../../../../interfaces/customer.model";
import {first, map, tap} from "rxjs";
import {ApiService} from "../../../../services/api.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent extends Crud<IngredientModel> {
  ingredients: IngredientModel[] | null = []
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
    this.apiService.delete(`/ingredients/${id}/delete`)
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
    this.apiService.get<IngredientModel[]>('/ingredients', headers)
      .pipe(
        tap(() => this.loading = true),
        first(),
        map(response => response.body),
      )
      .subscribe(ingredients => {
        this.loading = false;
        this.ingredients = ingredients?.sort(
          (ing1, ing2) => ing1.id - ing2.id) || [];
      }, error => {
        console.error(error);
        this.loading = false;
      })
  }
}
