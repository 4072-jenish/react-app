import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      <div className="row">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title text-truncate">{product.name}</h6>
                  <p className="mb-1 fw-bold text-success">₹{product.price}</p>
                  <p className="mb-0 text-muted small">{product.category}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
