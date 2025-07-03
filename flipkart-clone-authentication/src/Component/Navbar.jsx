import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch, FaShoppingCart, FaPlus, FaFilter, FaEllipsisV, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { filterByPrice, searchByName } from "../Service/Actions/productActions";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logoutAsync } from "../Service/Actions/authActions";

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
  <div className="container-fluid align-items-center">

    <a className="navbar-brand fw-bold minimal-navbar-brand" href="/">
      Flipkart
    </a>

    <div className="flex-grow-1 mx-3 position-relative" style={{ maxWidth: "600px" }}>
      <input
        type="text"
        className="form-control minimal-search-input ps-5"
        placeholder="Search for products and categories"
        onChange={handleSearch}
      />
      <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
    </div>

    <div className="d-flex align-items-center gap-3">
      <button className="btn minimal-btn" onClick={handleAddProduct}>
        <FaPlus className="me-1" /> Add Product
      </button>

      <div className="d-flex align-items-center">
        <FaFilter className="me-2 text-muted" />
        <select className="form-select minimal-select">
          <option value="">All Prices</option>
          <option value="0-500">Under ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="1000-1500">₹1000 - ₹1500</option>
          <option value="1500-2000">₹1500 - ₹2000</option>
          <option value="2000+">Above ₹2000</option>
        </select>
      </div>

      <div className="position-relative minimal-cart" onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
        <FaShoppingCart className="fs-5 me-2" />
        Cart
        {cart.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length}
          </span>
        )}
      </div>

      {user ? (
        <div className="dropdown">
          <button className="btn minimal-btn dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
            <FaUserCircle className="me-1" /> {user.email.split("@")[0]}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><button className="dropdown-item" onClick={() => navigate("/profile")}>Profile</button></li>
            <li><button className="dropdown-item" onClick={() => navigate("/orders")}>Orders</button></li>
            <li><button className="dropdown-item" onClick={() => navigate("/coupons")}>Coupons</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item text-danger" onClick={handleLogout}><FaSignOutAlt /> Sign Out</button></li>
          </ul>
        </div>
      ) : (
        <button className="btn minimal-btn" onClick={() => navigate("/signin")}>Sign In</button>
      )}
    </div>
  </div>
</nav>

  );
};

export default Navbar;
