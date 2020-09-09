import React, {useEffect} from "react";
import {RootState} from "../RootReducer";
import {fetchProducts} from "./ProductsReducer";
import {useDispatch, useSelector} from "react-redux";
import {Callout} from "../../../shared/Callout";
import {addToCart} from "./Actions";
import {toArray} from "../../../shared/Utils";
import ProductItem from "./ProductItem";

export default function ProductsContainer() {

  const { productsById, error, loading } = useSelector((state: RootState) => state.products);

  const products = toArray(productsById);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (productId: string) => {
    dispatch(addToCart(productId));
  };

  const renderProducts = () => {
    if (loading) {
      return <div>Loading Products...</div>
    }
    if (error) {
      return <Callout show={true} severity="WARNING">{JSON.stringify(error)}</Callout>
    }
    return products.map(product => <ProductItem product={product} onAddToCart={() => handleAddToCart(product.id)} key={product.id} />);
  };

  return (
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
  );
}