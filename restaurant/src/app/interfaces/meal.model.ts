import {IngredientModel} from "./ingredient.model";
import {Spiciness} from "./spiciness.enum";
import {DietType} from "./diet-type.enum";
export interface MealModel {
  id: number,
  name: string,
  spiciness: Spiciness,
  dietType: DietType,
  ingredients?: IngredientModel[]
}
