// BagsPage.js
import React, { useState } from 'react';
import './Bags.css'; // Import the updated CSS file
import ProductItem from '../ProductItem';

const Bags = () => {
  const [cart, setCart] = useState([]);
  const bags = [
    {
      id: 1,
      name: 'Tote Bag',
      price: 30,
      imageUrl: 'path-to-tote-bag-image.jpg',
    },
    {
      id: 2,
      name: 'Backpack',
      price: 45,
      imageUrl: 'path-to-backpack-image.jpg',
    },
    {
      id: 3,
      name: 'Crossbody Bag',
      price: 25,
      imageUrl: 'path-to-crossbody-bag-image.jpg',
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bag-page"> {/* Updated class name */}
      <h1>Bags Collection</h1>
      <div className="bag-list"> {/* Updated class name */}
        {bags.map((bag) => (
          <ProductItem key={bag.id} product={bag} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Bags;
