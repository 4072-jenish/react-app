import React from "react";
import { FaSearch, FaUser, FaShoppingCart, FaStore, FaEllipsisV } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2 px-4">
      <div className="container-fluid align-items-center">
        {/* Flipkart Logo */}
        <a className="navbar-brand d-flex flex-column fw-bold text-primary" href="/" style={{ fontSize: "22px" }}>
          Flipkart
          <span className="text-muted" style={{ fontSize: "12px", marginTop: "-5px" }}>
            Explore&nbsp;
            <span className="text-warning fw-semibold">Plus&nbsp;⭐</span>
          </span>
        </a>

        {/* Search Bar */}
        <div className="flex-grow-1 mx-3 position-relative" style={{ maxWidth: "600px" }}>
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search for Products, Brands and More"
            style={{ backgroundColor: "#f0f5ff", borderRadius: "8px" }}
          />
          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
        </div>

        {/* Right Icons */}
        <div className="d-flex align-items-center gap-4">
          {/* Account */}
          <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
            <FaUser className="me-2" />
            <span>Account&nbsp;▾</span>
          </div>

          {/* Cart */}
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

          {/* Seller */}
          <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
            <FaStore className="me-2" />
            <span>Become a Seller</span>
          </div>

          {/* More Options */}
          <div style={{ cursor: "pointer" }}>
            <FaEllipsisV />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
