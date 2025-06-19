import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => navigate("/"));
  }, [id, navigate]);

  if (!product) return <div className="text-center mt-5">Loading product...</div>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <h3>{product.name}</h3>
            <p className="text-muted">{product.category}</p>
            <p><strong>₹{product.price}</strong></p>
            <p>{product.description}</p>
            <p className="text-warning">⭐ {product.rating}</p>
            <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
