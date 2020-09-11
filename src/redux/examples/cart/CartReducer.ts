import {createReducer, createSelector, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../RootReducer";
import { selectUser } from '../user/Actions';
import { addToCart } from '../product/Actions';

interface CartState {
  addedProductIds: string[];
  quantityByProductId: Record<string, number>;
}

const initialState: CartState = {
  addedProductIds: [],
  quantityByProductId: {},
};

const cartReducers = createReducer(initialState, {
  [addToCart.type]: (state: CartState,  {payload}: PayloadAction<string>) => {
    const productId = payload;
    if (state.addedProductIds.indexOf(productId) === -1) {
      state.addedProductIds.push(productId);
    }
    const quantity = state.quantityByProductId[productId] || 0;
    state.quantityByProductId[productId] = quantity + 1;
  },
  [selectUser.type]: (state: CartState) => {
    state.quantityByProductId = {};
    state.addedProductIds = [];
  }
});
export default cartReducers;


const getProductsById = (state: RootState) => state.products.productsById;
const getAddedProductIds = (state: RootState) => state.cart.addedProductIds;
const getQuantityByProductId = (state: RootState) => state.cart.quantityByProductId;

export const productsInCart = createSelector(
    [getProductsById, getAddedProductIds, getQuantityByProductId],
    (productsById, addedProductIds, quantitiesByProductId) => {
      if (addedProductIds.length === 0) {
        return [];
      }
      return addedProductIds.map(id => ({
        ...productsById[id],
        quantity: quantitiesByProductId[id]
      }));
    }
);
