// 📁 src/Component/EditProduct.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });

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
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} className="form-control mb-2" placeholder="Name" />
        <input name="price" value={form.price} onChange={handleChange} className="form-control mb-2" placeholder="Price" />
        <input name="category" value={form.category} onChange={handleChange} className="form-control mb-2" placeholder="Category" />
        <input name="image" value={form.image} onChange={handleChange} className="form-control mb-2" placeholder="Image URL" />
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
