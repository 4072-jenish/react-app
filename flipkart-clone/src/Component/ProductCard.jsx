import React from "react";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { addToCartAsync } from "../Service/Actions/cartActions";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCartAsync(product));
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "180px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text mb-1">
            <strong>₹{product.price}</strong>
          </p>
          <p className="text-muted small">{product.category}</p>
          <button
            className="btn btn-outline-primary mt-auto"
            onClick={handleAddToCart}
          >
            <FaCartPlus className="me-1" />
            Add to Cart
          </button>
            <Link to={`/edit/${product.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
