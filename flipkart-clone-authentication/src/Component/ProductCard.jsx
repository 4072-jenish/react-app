import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus, FaTrash, FaEye } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { addToCartAsync } from "../Service/Actions/cartActions";
import { deleteProductAsync } from "../Service/Actions/productActions";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add product to cart");
       setTimeout(() => {
        navigate("/signin");
       },3000)
      return;
    }else{
      toast.success("Added To cart 🤗");
    }

    dispatch(addToCartAsync(product));
  };


  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      toast.success("Deleted Successfully");
        }else{
          toast.error("Failed to delete product ❌");
        }

    try {
      await dispatch(deleteProductAsync(product.id));
    } catch (error) {
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
           <ToastContainer  autoClose={3000} theme="dark"/>
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
