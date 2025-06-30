import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Service/Actions/productActions.js';
import ProductCard from './ProductCard.jsx';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    
    <div className="container mt-4">
      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-md-4 mb-3">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
