// TODO https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart?from-embed=&file=/src/containers/ProductsContainer.js
//  https://redux.js.org/introduction/examples

import React from 'react';
import {Provider} from "react-redux";
import store from './Store';
import CartContainer from "./cart/CartContainer";
import ProductsContainer from "./product/ProductsContainer";
import UserShoppingSelection from "./user/UserShoppingSelection";

export function ShoppingCartExample() {

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