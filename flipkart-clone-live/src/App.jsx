// 📁 src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "./Service/Actions/productActions";
import Navbar from "./Component/Navbar";
import ProductGrid from "./Component/productGrid";
import AddProduct from "./Component/AddProduct";
import Cart from "./Component/Cart";
import Carousel from "./Component/Carousel";
import EditProduct from "./Component/EditProduct";
import ProductDetails from "./Component/ProductDetails";
import Cursor from "./Component/Cursor/Cursor";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <>
         <Cursor/>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </>
  );
};

export default App;
