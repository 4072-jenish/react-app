import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProductsAsync } from "../Service/Actions/productActions";

const ProductGrid = () => {
  const dispatch = useDispatch();

  const filteredProducts = useSelector((state) => state.products.filtered);

  console.log(filteredProducts);
  
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="col-12 text-center">
            <h5>No products found.</h5>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
