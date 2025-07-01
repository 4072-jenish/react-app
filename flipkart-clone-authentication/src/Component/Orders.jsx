import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        orders
          .slice()
          .reverse() // newest first
          .map((order, index) => (
            <div key={order.id || index} className="card mb-4 shadow-sm">
              <div className="card-header">
                <strong>Order #{index + 1}</strong> —{" "}
                <small className="text-muted">
                  {new Date(order.id).toLocaleString()}
                </small>
              </div>
              <div className="card-body">
                {order.items.map((item) => (
                  <div key={item.id} className="row mb-3 align-items-center">
                    <div className="col-md-2 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ maxHeight: "80px", objectFit: "contain" }}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-10">
                      <h5>{item.name}</h5>
                      <p className="mb-1 text-muted">{item.category}</p>
                      <p>
                        ₹{item.price} × {item.quantity || 1} = ₹
                        {item.price * (item.quantity || 1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default Orders;
