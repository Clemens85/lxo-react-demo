import {combineReducers} from "redux";
import productsReducer from './product/ProductsReducer';
import cartReducer from './cart/CartReducer';
import usersReducer from './user/UserReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
