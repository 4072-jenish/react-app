import React from 'react';
import { useDispatch } from 'react-redux';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const add = () => dispatch({ type: 'ADD_TO_CART', payload: product });

  return (
    <div className="card p-2" style={{ width: '18rem' }}>
      <img src={product.image} alt={product.name} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>${product.price}</p>
        <button className="btn btn-primary" onClick={add}>Add to Cart</button>
      </div>
    </div>
  );
}
