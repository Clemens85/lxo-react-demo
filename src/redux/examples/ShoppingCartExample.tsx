import React from 'react';
import {Provider} from "react-redux";
import store from './Store';
import CartContainer from "./cart/CartContainer";
import ProductsContainer from "./product/ProductsContainer";
import UserShoppingSelection from "./user/UserShoppingSelection";

export function ShoppingCartExample() {

  // Normally the Provider and store configuration would be done in application root
  return (
      <Provider store={store}>
        <div>
          <UserShoppingSelection />
        </div>
        <div>
          <ProductsContainer />
        </div>
        <div>
          <CartContainer />
        </div>
      </Provider>
  );
}