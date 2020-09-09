import {Product} from "./Product";

export interface ProductInCart extends Product {
  quantity: number;
}

export const calculateTotalPrice = (items: ProductInCart[]): number => {
  const result = items.reduce(
                        (total, product) => total + product.price * product.quantity,
                        0);
  return result;
};