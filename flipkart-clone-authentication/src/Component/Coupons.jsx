import React, { useEffect, useState } from "react";

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    setCoupons([
      { code: "WELCOME10", discount: "10%" },
      { code: "FREESHIP", discount: "Free Shipping" },
    ]);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Your Coupons</h2>
      {coupons.length === 0 ? (
        <p className="text-muted mt-3">No coupons available.</p>
      ) : (
        <div className="row mt-3">
          {coupons.map((c) => (
            <div className="col-md-4 mb-3" key={c.code}>
              <div className="card p-3 shadow-sm">
                <h5 className="card-title">{c.code}</h5>
                <p className="card-text">Discount: {c.discount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Coupons;
