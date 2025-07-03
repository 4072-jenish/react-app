import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          alert("Product not found");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        navigate("/");
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (!product) return <div className="text-center mt-5">Loading product...</div>;

  return (
    <div className="container my-5">
    <div className="card shadow-lg border-0 rounded-4 p-4">
      <div className="row g-4 align-items-center">
        {/* Product Image */}
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid bg-light p-3 rounded-4"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>
  
        {/* Product Details */}
        <div className="col-md-7">
          <h2 className="fw-bold mb-1">{product.name}</h2>
          <span className="badge bg-secondary mb-2">{product.category}</span>
          <h4 className="text-success fw-bold mt-2 mb-3">₹{product.price}</h4>
          <p className="text-muted">{product.description}</p>
          <p className="text-warning fw-semibold mb-4">
            ⭐ {product.rating} / 5
          </p>
  
          <button
            className="btn btn-outline-primary rounded-pill px-4"
            onClick={() => navigate(-1)}
          >
            ⬅ Back to Products
          </button>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default ProductDetails;
