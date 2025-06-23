import React from "react";
import { useDispatch } from "react-redux";
import { FaCartPlus, FaTrash, FaEye, FaEdit } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { addToCartAsync } from "../Service/Actions/cartActions";
import { Link } from "react-router-dom";
import axios from "axios";
import './common.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCartAsync(product));
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/products/${product.id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: product.id });
      alert("Product deleted successfully.");
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Error deleting product.");
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-lg position-relative border-none p-3">
        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-info viewButton delButton">
            <FaEye />
          </Link>
          <button className="btn btn-sm btn-danger delButton" onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>

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
          <p className="card-text text-warning">⭐ {product.rating}</p>
          <p className="text-muted small">{product.category}</p>

          <button className="mt-auto addToCart" onClick={handleAddToCart}>
            <FaCartPlus className="me-1" />
            Add to Cart
          </button>

          <Link to={`/edit/${product.id}`} className="mt-2 editButton">
          <RiEdit2Line /> 
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
