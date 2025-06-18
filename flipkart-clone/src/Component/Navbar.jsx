// 📁 Components/Navbar.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { searchByName, filterByCategory, filterByPrice } from "../Service/Actions/productActions";
import { FaSearch, FaShoppingCart, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    dispatch(searchByName(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(filterByCategory(e.target.value));
  };

  const handlePriceChange = (e) => {
    const range = e.target.value.split("-").map(Number);
    dispatch(filterByPrice(range));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2874f0" }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" style={{ fontSize: "24px" }} href="/">
          Flipkart
        </a>

        <div className="d-flex mx-auto w-50 position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products, brands and more"
            onChange={handleSearch}
          />
          <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary" />
        </div>

        <div className="d-flex align-items-center ms-auto gap-3">
          <select className="form-select form-select-sm" onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="appliances">Appliances</option>
            <option value="books">Books</option>
          </select>

          <select className="form-select form-select-sm" onChange={handlePriceChange}>
            <option value="">All Prices</option>
            <option value="0-500">Under ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="1000-2000">₹1000 - ₹2000</option>
            <option value="2000-10000">Above ₹2000</option>
          </select>

          <button className="btn btn-light btn-sm" onClick={() => navigate("/add-product")}>
            <FaPlus className="me-1" />
            Add Product
          </button>

          <button className="btn btn-warning btn-sm" onClick={() => navigate("/cart")}>
            <FaShoppingCart className="me-1" />
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;