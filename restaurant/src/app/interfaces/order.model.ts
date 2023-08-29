import CustomerModel from "./customer.model";
import {MealModel} from "./meal.model";

interface OrderModel {
  id: number,
  customerId?: number,
  meals?: MealModel[]
}
export default OrderModel;
