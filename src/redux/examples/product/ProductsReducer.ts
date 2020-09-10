import {createAction, createReducer, PayloadAction} from "@reduxjs/toolkit";
import {findProductsAsync} from "../../../shared/product/ProductService";
import {AppThunk} from "../Store";
import cloneDeep from 'lodash/cloneDeep';
import {Product} from "../../../shared/product/Product";
import { selectUser } from '../user/Actions';
import { addToCart } from './Actions';

interface ProductsState {
  productsById: Record<string, Product>;
  loading: boolean;
  error: string | null;
  productsUntouched: Product[];
}

const initialState: ProductsState = {
  productsById: {},
  loading: true,
  error: null,
  productsUntouched: []
};

function setProductsIntoState(state: ProductsState, products: Product[]) {
  state.productsById = products.reduce((accumulatedResult: Record<string, Product>, product) => {
    accumulatedResult[product.id] = product;
    return accumulatedResult;
  }, {});
  state.productsUntouched = cloneDeep(products);
}

const fetchProductsStart = createAction('fetchProductsStart');
const fetchProductsFailure = createAction<string>('fetchProductsFailure');
const fetchProductsSuccess = createAction<Product[]>('fetchProductsSuccess');

const productsReducer = createReducer(initialState, {
  [fetchProductsStart.type]: (state) => {
    state.loading = true;
  },
  [fetchProductsFailure.type]: (state: ProductsState, {payload}: PayloadAction<string>) => {
    state.loading = false;
    state.error = payload;
  },
  [fetchProductsSuccess.type]: (state, action: PayloadAction<Product[]>) => {
    state.loading = false;
    setProductsIntoState(state, action.payload);
    state.error = null;
  },
  [addToCart.type]: (state: ProductsState, {payload}: PayloadAction<string>) => {
    const productId = payload;
    const product = state.productsById[productId];
    if (product.inventory)
    product.inventory -= 1;
  },
  [selectUser.type]: (state: ProductsState) => {
    setProductsIntoState(state, state.productsUntouched);
  }
});
export default productsReducer;

// Asynchronous thunk action
export function fetchProducts(): AppThunk {
  return async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const products = await findProductsAsync();
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(JSON.stringify(error)))
    }
  }
}
