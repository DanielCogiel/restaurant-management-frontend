import CustomerModel from "./customer.model";
import {MealModel} from "./meal.model";

interface OrderModel {
  id: number,
  customer?: CustomerModel,
  meals?: MealModel[]
}
export default OrderModel;
