import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartAsync } from "../Service/Actions/cartActions";
import { useNavigate } from "react-router";
import './common.css'
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCartAsync(id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  return (
    <div className="container mt-4">
       <div className="d-flex justify-content-between align-items-center">
       <h2>Your Cart</h2>
      <button className="btn btn-primary mb-3 delButton" onClick={() => navigate("/")}>
        Back to Home
      </button>
       </div>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="row g-3">
          {/* Cart Items List */}
          <div className="col-md-8">
            {cart.map((item) => (
              <div className="col-12 mb-3" key={item.id}>
                <div className="card">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-4 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text fs-5 fw-semibold text-success">
                          ₹{item.price} x {item.quantity || 1} = ₹{item.price * (item.quantity || 1)}
                        </p>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text text-warning">⭐ {item.rating}</p>

                        <div className="d-flex align-items-center mb-2">
                          <button
                            className="btn btn-outline-secondary btn-sm me-2"
                            onClick={() => handleDecrease(item.id)}
                          >
                            -
                          </button>
                          <span>{item.quantity || 1}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => handleIncrease(item.id)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="btn btn-danger delButton"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed Total Summary */}
          <div className="col-md-4">
            <div className="card p-3 position-sticky" style={{ top: "80px" }}>
              <h4>Total Summary</h4>
              {cart.map((item) => (
                <div key={item.id} className="mb-2">
                  <div className="d-flex justify-content-between">
                    <span>{item.name}</span>
                    <span>₹{item.price * (item.quantity || 1)}</span>
                  </div>
                </div>
              ))}
              <hr />
              <p className="fs-5 fw-bold">Total: ₹{total.toFixed(2)}</p>
              <button className="btn btn-success w-100 delButton ">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
