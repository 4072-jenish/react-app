import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus, FaTrash, FaEye } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { addToCartAsync } from "../Service/Actions/cartActions";
import { deleteProductAsync } from "../Service/Actions/productActions";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";
import { ToastContainer, toast } from 'react-toastify';
import index from "toastify";

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
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
           <ToastContainer  autoClose={3000} theme="dark"/>
      
    <div className="minimal-card h-100 d-flex flex-column">
  
      <div className="minimal-card-image">
        <img src={product.image} alt={product.name} />
      </div>
  
      <div className="minimal-card-body flex-grow-1 d-flex flex-column">
        <h6 className="minimal-card-title" title={product.name}>
          {product.name}
        </h6>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="minimal-card-price">₹{product.price}</span>
          <span className="minimal-card-rating">⭐ {product.rating}</span>
        </div>
        <span className="minimal-card-category">{product.category}</span>
        <div className="mt-auto">
            <div className="d-flex gap-2 mt-3">
              <Link
                to={`/product/${product.id}`}
                className="minimal-btn"
                title="View"
              >
                <FaEye /> <span className="d-none d-md-inline ms-1">View</span>
              </Link>
              <button
                className="minimal-btn"
                onClick={handleAddToCart}
                title="Add to Cart"
                aria-label="Add to Cart"
              >
                <FaCartPlus /> <span className="d-none d-md-inline ms-1">Add To Cart</span>
              </button>
              {user ? (
                <Link to={`/edit/${product.id}`} className="mt-2 editButton">
                  <RiEdit2Line /> Edit
                </Link>
              ) : (
                <button
                  className="minimal-btn"
                  onClick={() => {
                    alert("Please sign in to edit product.");
                    navigate("/signin");
                  }}
                >
                  <RiEdit2Line /> Edit
                </button>
              )}
              {user ? (
                <button className="btn btn-sm btn-danger delButton" onClick={handleDelete}>
                  <FaTrash />
                </button>
              ) : (
                <button
                  className="minimal-btn"
                  onClick={() => {
                    alert("Please sign in to delete product.");
                    navigate("/signin");
                  }}
                >
                  <FaTrash />
                </button>
              )}
            </div>
        </div>
      </div>
    </div>
  </div>
  
    );
};

export default ProductCard;
