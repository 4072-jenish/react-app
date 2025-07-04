import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "./Service/Actions/productActions";
import Navbar from "./Component/Navbar";
import ProductGrid from "./Component/productGrid";
import AddProduct from "./Component/AddProduct";
import Cart from "./Component/Cart";
import Carousel from "./Component/Carousel";
import EditProduct from "./Component/EditProduct";
import ProductDetails from "./Component/ProductDetails";
import Cursor from "./Component/Cursor/Cursor";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import Profile from "./Component/Profile";
import Orders from "./Component/Orders";
import Coupons from "./Component/Coupons";

const MainApp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); 
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <>
      <Cursor />
      <div className="text-end px-4 fw-semibold text-muted small">
        {user ? `✅ Welcome, ${user.email}` : `🚫 Not signed in`}
      </div>
      <Navbar />
      <Carousel />


      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/coupons" element={<Coupons />} />
      </Routes>
    </>
  );
};

export default MainApp;
