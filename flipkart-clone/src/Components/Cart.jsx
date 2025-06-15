import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <div>
            <h5>{item.name}</h5>
            <p>${item.price}</p>
          </div>
          <button className="btn btn-danger" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
