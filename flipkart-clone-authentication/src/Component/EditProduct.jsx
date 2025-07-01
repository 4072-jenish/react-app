import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { editProductAsync } from "../Service/Actions/productActions";
import { toast , ToastContainer} from 'react-toastify';

import {
  FaBoxOpen,
  FaRupeeSign,
  FaStar,
  FaTags,
  FaImage,
  FaAlignLeft,
  FaEdit
} from "react-icons/fa";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    rating: ""
  });
  const [uploading, setUploading] = useState(false);

   useEffect(() => {
     const fetchProduct = async () => {
       try {
         const productRef = doc(db, "products", id);
         const productSnap = await getDoc(productRef);
         if (productSnap.exists()) {
           setForm(productSnap.data());
         } else {
          toast.error("Feild to Loading Product ");
          setTimeout(() => {
             navigate("/");
          },3000)
         }
       } catch (err) {
         console.error("Error loading product:", err);
         toast.error("Feild to Loading Product ");
        setTimeout(() => {
           navigate("/");
        },3000)
       }
     };
     fetchProduct();
   }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "flip-images");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dd8rb9luw/image/upload", data);
      setForm({ ...form, image: res.data.secure_url });
    } catch (err) {
             toast.error("feild to upload image");
      
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(editProductAsync(id, form));
             toast.success("Product updated successfully 🤗");
         setTimeout(() => {
          navigate("/");
         }, 3000);
    } catch (error) {
      console.error("Error updating product:", error);
             toast.error("Feild to update product");
      
    }
  };

  return (
    <div className="container mt-5">
           <ToastContainer  autoClose={3000} theme="dark"/>
      <div className="card shadow-lg p-4 rounded-4 border-0">
        <h3 className="text-center mb-4">
          <FaEdit className="me-2" /> Edit Product
        </h3>
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-12">
            <label className="form-label fw-semibold">
              <FaBoxOpen className="me-1" /> Product Name
            </label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              <FaRupeeSign className="me-1" /> Price
            </label>
            <input
              required
              type="number"
              name="price"
              className="form-control"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              <FaTags className="me-1" /> Category
            </label>
            <select
              required
              name="category"
              className="form-select"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Electronics">📱 Electronics</option>
              <option value="Fashion">👗 Fashion</option>
              <option value="Books">📚 Books</option>
              <option value="Wearables">⌚ Wearables</option>
              <option value="Mobiles">📞 Mobiles</option>
              <option value="Camera">📷 Camera</option>
              <option value="Accessories">🎧 Accessories</option>
              <option value="Toys">🧸 Toys</option>
              <option value="Decorations">🕯️ Decorations</option>
              <option value="Audio">🔊 Audio</option>
            </select>
          </div>

          <div className="col-md-12">
            <label className="form-label fw-semibold">
              <FaImage className="me-1" /> Product Image
            </label>
            <input type="file" className="form-control" onChange={handleImageUpload} />
            {uploading && <div className="text-muted small mt-1">Uploading image...</div>}
            {form.image && (
              <img src={form.image} alt="Uploaded preview" className="img-thumbnail mt-2" style={{ maxHeight: "120px" }} />
            )}
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">
              <FaAlignLeft className="me-1" /> Description
            </label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              <FaStar className="me-1" /> Rating
            </label>
            <input
              required
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              className="form-control"
              value={form.rating}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-4 py-2 rounded-3" disabled={uploading}>
              <FaEdit className="me-2" /> Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
