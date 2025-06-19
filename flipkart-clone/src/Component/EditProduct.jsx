import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaBoxOpen,
  FaRupeeSign,
  FaStar,
  FaTags,
  FaImage,
  FaAlignLeft,
  FaEdit,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import './common.css';

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

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/products/${id}`, form);
    dispatch({ type: "EDIT_PRODUCT", payload: form }); // optional if you handle edit in redux
    alert("Product updated successfully!");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4 border-0">
        <h3 className="text-center mb-4">
          <FaEdit className="me-2" />Edit Product
        </h3>
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-12">
            <label className="form-label fw-semibold">
              <FaBoxOpen className="me-1" />Product Name
            </label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter product name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              <FaRupeeSign className="me-1" />Price
            </label>
            <input
              required
              type="number"
              name="price"
              className="form-control"
              placeholder="e.g. 1999"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              <FaTags className="me-1" />Category
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
              <FaImage className="me-1" />Image URL
            </label>
            <input
              type="url"
              name="image"
              className="form-control"
              placeholder="Paste image link"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">
              <FaAlignLeft className="me-1" />Description
            </label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Write a detailed product description"
              rows="4"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              <FaStar className="me-1" />Rating
            </label>
            <input
              required
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              className="form-control"
              placeholder="e.g. 4.5"
              value={form.rating}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-4 py-2 rounded-3">
              <FaEdit className="me-2" />Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
