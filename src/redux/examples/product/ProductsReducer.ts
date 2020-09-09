import {createAction, createReducer, PayloadAction} from "@reduxjs/toolkit";
import {findProductsAsync} from "../shared/ProductService";
import {AppThunk} from "../Store";
import {Product} from "../shared/Product";

interface ProductsState {
  productsById: Record<string, Product>;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  productsById: {},
  loading: true,
  error: null
};

const fetchProductsStart = createAction('fetchProductsStart');
const fetchProductsFailure = createAction<string>('fetchProductsFailure');
const fetchProductsSuccess = createAction<Product[]>('fetchProductsSuccess');

const productsReducer = createReducer(initialState, {
  fetchProductsStart: (state) => {
    state.loading = true;
  },
  fetchProductsFailure: (state: ProductsState, {payload}: PayloadAction<string>) => {
    state.loading = false;
    state.error = payload;
  },
  fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
    state.loading = false;
    state.productsById = action.payload.reduce((recordResult: Record<string, Product>, product) => {
      recordResult[product.id] = product;
      return recordResult;
    }, {});
    state.error = null;
  },
  addToCart: (state: ProductsState, {payload}: PayloadAction<string>) => {
    const productId = payload;
    const product = state.productsById[productId];
    if (product.inventory)
    product.inventory -= 1;
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

// export default productsSlice.reducer;

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     fetchPostsStart(state: ProductsState) {
//       state.loading = true;
//     },
//     fetchPostsFailure(state: ProductsState, {payload}: PayloadAction<string>) {
//       state.loading = false;
//       state.error = payload;
//     },
//     fetchPostsSuccess(state: ProductsState, action: PayloadAction<Product[]>) {
//       state.loading = false;
//       state.items = action.payload;
//       state.error = null;
//     },
//     addToCart(state: ProductsState, {payload}: PayloadAction<string>) {
//       const productId = payload;
//       const product = findEntityById(state.items, productId);
//       product.inventory -= 1;
//     }
//   }
// });

// export const { fetchPostsSuccess, fetchPostsStart, fetchPostsFailure, addToCart } = productsSlice.actions;
