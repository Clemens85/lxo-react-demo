import React from "react";
import {useSelector} from "react-redux";
import {productsInCart} from "./CartReducer";
import {RootState} from "../RootReducer";
import {calculateTotalPrice, ProductInCart} from "../shared/ProductInCart";
import CartItem from "./CartItem";

export default function CartContainer() {

  const selectedProductsInCart = useSelector((state: RootState) => productsInCart(state)) as ProductInCart[];
  const hasProducts = selectedProductsInCart.length > 0;

  const renderCart = () => {
    if (!hasProducts) {
      return <em>Cart is empty.</em>;
    }

    const selectedProductsInCartNodes = selectedProductsInCart.map(selectedProductInCart =>
      <CartItem productInCart={selectedProductInCart} key={selectedProductInCart.id}/>
    );
    const totalPrice = calculateTotalPrice(selectedProductsInCart);

    return (
      <div>
        {selectedProductsInCartNodes}
        <div style={{paddingTop: '5px'}}>
          <i>Total Price in cart:</i> <strong>{totalPrice} EUR</strong>
        </div>
      </div>
    );
  };

  return (
      <div style={{paddingLeft: '15px'}}>
        <h2>Cart</h2>
        {renderCart()}
      </div>
  );
}