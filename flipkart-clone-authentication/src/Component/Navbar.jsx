import React from "react";
import { FaSearch, FaShoppingCart, FaPlus, FaFilter, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterByPrice, searchByName } from "../Service/Actions/productActions";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      dispatch(filterByPrice([]));
    } else {
      const range = value.split("-").map(Number);
      dispatch(filterByPrice(range));
    }
  };
  const handleLogout = () => {
    signOut(auth);
  };

  const handleSearch = (e) => {
    dispatch(searchByName(e.target.value));
  };
  

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2 px-4">
      <div className="container-fluid align-items-center">
        <a className="navbar-brand d-flex flex-column fw-bold text-primary" href="/" style={{ fontSize: "22px" }}>
          Flipkart
          <span className="text-muted" style={{ fontSize: "12px", marginTop: "-5px" }}>
            Explore&nbsp;
            <span className="text-warning fw-semibold">Plus&nbsp;⭐</span>
          </span>
        </a>

        <div className="flex-grow-1 mx-3 position-relative" style={{ maxWidth: "600px" }}>
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search for Products And Category"
            style={{ backgroundColor: "#f0f5ff", borderRadius: "8px" }}
            onChange={handleSearch}
          />

          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
        </div>

        <div className="d-flex align-items-center gap-4">
          <button
            className="btn btn-outline-primary btn-sm d-flex align-items-center"
            onClick={() => navigate("/add-product")}
          >
            <FaPlus className="me-2" /> Add Product
          </button>

          <div className="d-flex align-items-center">
            <FaFilter className="me-2" />
            <select className="form-select form-select-sm" onChange={handlePriceChange}>
              <option value="">All Prices</option>
              <option value="0-500">Under ₹500</option>
              <option value="500-1000">₹500 - ₹1000</option>
              <option value="1000-2000">₹1000 - ₹2000</option>
              <option value="2000-10000">Above ₹2000</option>
            </select>
          </div>

          <div
            className="position-relative d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart className="me-2 fs-5" />
            <span>Cart</span>
            {cart.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "10px" }}
              >
                {cart.length}
              </span>
            )}
          </div>

          <div style={{ cursor: "pointer" }}>
            <FaEllipsisV />
          </div>

              <button onClick={handleLogout()} className="btn btn-outline-danger btn-sm">  Sign out  </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
