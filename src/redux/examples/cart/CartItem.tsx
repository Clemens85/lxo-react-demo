import React from "react";
import ProductDetails from "../product/ProductDetails";
import {ProductInCart} from "../shared/ProductInCart";

export interface CartItemProps {
  productInCart: ProductInCart
}

export default function CartItem({productInCart}: CartItemProps) {

  const { quantity } = productInCart;

  return (
      <div style={{ paddingBottom: '15px'}}>
        <ProductDetails product={productInCart}/>
        <span> (<strong>{quantity}</strong> times selected)</span>
      </div>
  );
}