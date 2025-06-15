import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-2">
      <Link className="navbar-brand fw-bold fs-4" to="/">Flipkart</Link>

      <form className="d-flex mx-auto" style={{ width: "50%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for products, brands and more"
          onChange={(e) => onSearch(e.target.value)}
        />
      </form>

      <Link to="/add" className="btn btn-outline-light ms-auto">
        + Add Product
      </Link>
    </nav>
  );
};

export default Navbar;
