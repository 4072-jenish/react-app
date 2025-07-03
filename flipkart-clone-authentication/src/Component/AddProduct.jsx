import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './common.css';
import axios from 'axios';
import { FaBoxOpen, FaRupeeSign, FaStar, FaTags, FaImage, FaAlignLeft } from 'react-icons/fa';
import { BsFillSendCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { addProductAsync } from '../Service/Actions/productActions';
import { toast , ToastContainer} from 'react-toastify';

const AddProduct = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
    rating: '',
  });

  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);

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
       toast.error("Error uploading image ⁉");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, price, category, image, description, rating } = form;
    if (!name || !price || !category || !rating) {
      toast.error("Fill all fields ");
    }

    const newProduct = {
      name,
      price: parseFloat(price),
      category,
      image,
      description,
      rating: parseFloat(rating),
    };

    try {
      await dispatch(addProductAsync(newProduct));
      toast.success("Product added successfully 🎉");
       setTimeout(() => {
         
      navigate("/");
       },3000)
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Feild to add product ⁉");

    }
  };

  return (
    <div className="container mt-5">
  <ToastContainer autoClose={3000} theme="dark" />
  <div className="card shadow-lg p-4 border-0 rounded-4">
    <h3 className="text-center fw-bold mb-4">
      <FaBoxOpen className="me-2" /> Add New Product
    </h3>

    <form onSubmit={handleSubmit} className="row g-4">
      <div className="col-md-12">
        <label className="form-label fw-semibold">
          <FaBoxOpen className="me-2" /> Product Name
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control rounded-pill px-3"
          placeholder="Enter product name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">
          <FaRupeeSign className="me-2" /> Price
        </label>
        <input
          required
          type="number"
          name="price"
          className="form-control rounded-pill px-3"
          placeholder="e.g. 1999"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">
          <FaTags className="me-2" /> Category
        </label>
        <select
          required
          name="category"
          className="form-select rounded-pill px-3"
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
          <FaImage className="me-2" /> Product Image
        </label>
        <input type="file" className="form-control" onChange={handleImageUpload} />
        {uploading && <div className="text-muted small mt-1">Uploading image...</div>}
        {form.image && (
          <img
            src={form.image}
            alt="Uploaded preview"
            className="img-thumbnail mt-2"
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
        )}
      </div>

      <div className="col-12">
        <label className="form-label fw-semibold">
          <FaAlignLeft className="me-2" /> Description
        </label>
        <textarea
          name="description"
          className="form-control rounded-3"
          placeholder="Write a detailed product description"
          rows="4"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">
          <FaStar className="me-2" /> Rating
        </label>
        <input
          required
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          className="form-control rounded-pill px-3"
          placeholder="e.g. 4.5"
          value={form.rating}
          onChange={handleChange}
        />
      </div>

      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
          disabled={uploading}
        >
          <BsFillSendCheckFill className="me-2" /> Add Product
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default AddProduct;
