import React from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 product-item">
      <div className="card product-card border-0 shadow-sm h-100">
        <div className="image-container position-relative">
          <img src={image} className="card-img-top" alt={title} />
          <div className="overlay d-flex justify-content-between align-items-center px-3">
            <div className="FaHeart"><FaHeart className="card-icon" /></div>
            <button className="btn  btn-sm">Add to cart</button>
            <div className="FaHeart"><FaSearch className="card-icon" /></div>
          </div>
        </div>
        <div className="card-body text-center">
          <h6 className="card-title mb-1">{title}</h6>
          <p className="card-text text-muted">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
