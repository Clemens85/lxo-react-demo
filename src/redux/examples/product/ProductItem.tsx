import React from "react";
import ProductDetails from "./ProductDetails";
import {Product} from "../../../shared/product/Product";

export interface ProductAddableProps {
  product: Product;
  onAddToCart: (...args: any[]) => unknown;
}

export default function ProductItem({product, onAddToCart}: ProductAddableProps) {

  const { inventory } = product;
  const disabled = inventory <= 0;

  return (
      <div style={{ paddingBottom: '15px'}}>
        <div>
          <ProductDetails product={product} />
          {inventory >= 1 && <span> (<strong>{inventory}</strong> left)</span> }
        </div>
        <button onClick={onAddToCart} disabled={disabled} style={{ padding: '5px', marginTop: '5px'}}>Add to Shopping Cart</button>
      </div>
  );
}