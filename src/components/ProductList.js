import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

function ProductList() {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return <div className="list">{productList}</div>;
}

export default ProductList;
