// components/JewelryPage.js
import React from 'react';
import './JewelryPage.css';
import ProductItem from '../ProductItem';
import { jewelryProducts } from '../../Pages/data';



const JewelryPage = () => {
  return (
    <div className="jewelry-page">
      <h1>Jewelry Collection</h1>
      <div className="product-list">
        {jewelryProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default JewelryPage;