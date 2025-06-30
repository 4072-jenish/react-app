import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([]);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-muted mt-3">You have no orders yet.</p>
      ) : (
        <ul className="list-group mt-3">
          {orders.map((o) => (
            <li className="list-group-item" key={o.id}>
              <strong>Order #{o.id}</strong> — {o.date}
              <ul>
                {o.items.map((item) => (
                  <li key={item.id}>{item.name} × {item.qty}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
