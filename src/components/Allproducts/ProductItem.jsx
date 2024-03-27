// components/ProductItem.js
import React from 'react';
import './ProductItem.css'
const ProductItem = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
