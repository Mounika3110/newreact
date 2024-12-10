import React from 'react';
import { productDatas } from '../Data/Product1'; 

function Tv() {
  return (
    <div>
      <h1>TV Products</h1> 
      <div className="tv-list">
        {productDatas.map((product) => (
          <div key={product.id} className="tv-item">
            <h2>{product.brand} - {product.screensize}"</h2>
            <p><strong>Display Type:</strong> {product.Display}</p>
            <p><strong>Dimensions:</strong> {product.Dimensions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tv;
