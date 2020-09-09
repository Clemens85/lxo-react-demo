import React from "react";
import {Product} from "../shared/Product";

export interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({product}: ProductDetailsProps) {

  const {name, price} = product;
  return (
      <>
        <span>{name}</span>: <i>{price} Euro</i>
      </>
  );
}