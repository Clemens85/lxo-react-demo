import React from "react";
import {useSelector} from "react-redux";
import {productsInCart} from "./CartReducer";
import {RootState} from "../RootReducer";
import {ProductInCart} from "../../../shared/product/ProductInCart";
import CartItem from "./CartItem";
import {calculateTotalPrice} from "../../../shared/product/ProductService";

export default function CartContainer() {

  const selectedProductsInCart = useSelector((state: RootState) => productsInCart(state)) as ProductInCart[];
  const hasProducts = selectedProductsInCart.length > 0;

  const selectedUser = useSelector((state:RootState) => state.users.selectedUser);

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
        <h2>Cart {selectedUser && <span> for {selectedUser.name}</span>}</h2>
        {renderCart()}
      </div>
  );
}