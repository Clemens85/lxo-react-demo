import {createReducer, createSelector, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../RootReducer";

interface CartState {
  addedProductIds: string[];
  quantityByProductId: Record<string, number>;
}

const initialState: CartState = {
  addedProductIds: [],
  quantityByProductId: {},
};

const cartReducers = createReducer(initialState, {
  addToCart: (state: CartState,  {payload}: PayloadAction<string>) => {
    const productId = payload;
    if (state.addedProductIds.indexOf(productId) === -1) {
      state.addedProductIds.push(productId);
    }
    const quantity = state.quantityByProductId[productId] || 0;
    state.quantityByProductId[productId] = quantity + 1;
  },
});
export default cartReducers;



const getProducts = (state: RootState) => state.products;
const getAddedProductIds = (state: RootState) => state.cart.addedProductIds;
const getQuantityByProductId = (state: RootState) => state.cart.quantityByProductId;

// <any, any, ProductInCart[]>
export const productsInCart = createSelector(
    [getProducts, getAddedProductIds, getQuantityByProductId],
    (productsState, addedProductIds, quantitiesByProductId) => {
      if (addedProductIds.length === 0) {
        return [];
      }
      return addedProductIds.map(id => ({
        ...productsState.productsById[id],
        quantity: quantitiesByProductId[id]
      }));
    }
);
