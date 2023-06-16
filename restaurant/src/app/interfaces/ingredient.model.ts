import {Unit} from "./unit.enum";
import {MealModel} from "./meal.model";

export interface IngredientModel {
  id: number,
  name: string,
  amount: number,
  unit: Unit;
  isGluten: boolean,
  meals?: MealModel[]
}
