import OrderModel from "./order.model";

interface CustomerModel {
  id: number,
  name: string,
  surname: string,
  table_number: number,
  orders?: OrderModel []
}
export default CustomerModel;
