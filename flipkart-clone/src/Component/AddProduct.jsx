import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/products', form); 
      dispatch({ type: 'ADD_PRODUCT', payload: res.data });
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error.message);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="row g-3 mt-3">
        <div className="col-md-6">
          <input
            required
            type="text"
            name="name"
            className="form-control"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            required
            type="number"
            name="price"
            className="form-control"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            required
            type="text"
            name="category"
            className="form-control"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="image"
            className="form-control"
            placeholder="Image URL (optional)"
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
