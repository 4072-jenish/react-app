import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch, FaShoppingCart, FaPlus, FaFilter, FaEllipsisV, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { filterByPrice, searchByName } from "../Service/Actions/productActions";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logoutAsync } from "../Service/Actions/authActions";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      dispatch(filterByPrice([]));
    } else {
      const range = value.split("-").map(Number);
      dispatch(filterByPrice(range));
    }
  };
  const handleCart = () => {
    if (!user) {
      toast.error("You must be signed in to view your cart.");
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } else {
      navigate("/cart");
    }
  };


  const handleSearch = (e) => {
    dispatch(searchByName(e.target.value));
  };

  const handleAddProduct = () => {
    if (!user) {
      alert("You must be signed in to add a product.");
      return navigate("/signin");
    }
    navigate("/add-product");
  };

  const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (!confirmed) return;
    try {
      await signOut(auth);
      dispatch(logoutAsync());
      navigate("/signin");
    } catch {
      alert("Failed to sign out.");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg minimal-navbar shadow-sm py-2 px-3">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand fw-bold minimal-navbar-brand" href="/">
          Flipkart
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Bar */}
          <div className="w-100 mt-3 mt-lg-0 mx-lg-3 position-relative" style={{ maxWidth: "600px" }}>
            <input
              type="text"
              className="form-control minimal-search-input ps-5"
              placeholder="Search for products and categories"
              onChange={handleSearch}
            />
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          </div>

          {/* Right Side Items */}
          <ul className="navbar-nav ms-auto mt-3 mt-lg-0 d-flex align-items-center gap-3">
            <li className="nav-item">
              <button className="btn minimal-btn w-100" onClick={handleAddProduct} title="Add Product">
                <FaPlus />
              </button>
            </li>

            <li className="nav-item d-flex align-items-center">
              <FaFilter className="me-2 text-muted" />
              <select className="form-select minimal-select" onChange={handlePriceChange}>
                <option value="">All Prices</option>
                <option value="0-500">Under ₹500</option>
                <option value="500-1000">₹500 - ₹1000</option>
                <option value="1000-1500">₹1000 - ₹1500</option>
                <option value="1500-2000">₹1500 - ₹2000</option>
                <option value="2000+">Above ₹2000</option>
              </select>
            </li>

            <li className="nav-item">
              <div className="position-relative minimal-cart" onClick={handleCart} style={{ cursor: "pointer" }}>
                <FaShoppingCart className="fs-5 me-1" />
                <span className="d-none d-lg-inline">Cart</span>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </div>
            </li>

            <li className="nav-item dropdown">
              {user ? (
                <>
                  <button
                    className="btn minimal-btn dropdown-toggle d-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <FaUserCircle className="me-1" />
                    <span className="d-none d-lg-inline">{user.email.split("@")[0]}</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><button className="dropdown-item" onClick={() => navigate("/profile")}>Profile</button></li>
                    <li><button className="dropdown-item" onClick={() => navigate("/orders")}>Orders</button></li>
                    <li><button className="dropdown-item" onClick={() => navigate("/coupons")}>Coupons</button></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        <FaSignOutAlt /> Sign Out
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                <button className="btn minimal-btn" onClick={() => navigate("/signin")}>Sign In</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
