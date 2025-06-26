import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { FaCartPlus, FaTrash, FaEye } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { addToCartAsync } from "../Service/Actions/cartActions";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "./common.css";
import { useAuth } from "./AuthContext";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = () => {
    console.log("User in handleAddToCart:", user);
    if (loading) return;
    if (!user) {
      alert("Please sign in to add to cart.");
      navigate("/signin");
      return;
    }

    dispatch(addToCartAsync(product));
    alert("Added to cart successfully!");
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-lg position-relative border-none p-3">
        <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-info viewButton delButton">
            <FaEye />
          </Link>
          <button className="btn btn-sm btn-danger delButton" onClick={() => alert("Delete not implemented here")}>
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
          <p className="card-text mb-1"><strong>₹{product.price}</strong></p>
          <p className="card-text text-warning">⭐ {product.rating}</p>
          <p className="text-muted small">{product.category}</p>

          <button className="mt-auto addToCart" onClick={handleAddToCart}>
            <FaCartPlus className="me-1" />
            Add to Cart
          </button>

          <Link to={`/edit/${product.id}`} className="mt-2 editButton">
            <RiEdit2Line /> Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
