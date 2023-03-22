import React from "react";

function ProductItem({ product }) {
  return (
    <div className="product">
      <img className="productImage" alt={product.name} src={product.image} />
      <p className="text">{product.name}</p>
      <p className="text">
        <strong>{product.price}</strong> KD
      </p>
    </div>
  );
}

export default ProductItem;
