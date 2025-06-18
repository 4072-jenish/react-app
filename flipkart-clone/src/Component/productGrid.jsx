import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProductsAsync } from "../Service/Actions/productActions";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const { filtered } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row">
        {filtered.length === 0 ? (
          <div className="col-12 text-center">
            <h5>No products found.</h5>
          </div>
        ) : (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
