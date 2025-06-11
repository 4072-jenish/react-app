import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../Services/Actions/recipieActions";
import { useNavigate } from "react-router-dom";
import { getResepie } from "../Services/storage";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipie.recipes);


  const [form, setForm] = useState({
    id: "",
    name: "",
    img: "",
    video: "",
    rating: "",
    desc: "",
    ingradiants: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 1;
    const newRecipe = { ...form, id: newId };

    const updatedRecipes = [...recipes, newRecipe];
    dispatch(addRecipe(updatedRecipes));
    navigate("/");
  };

  return (
    <div className="glass-form-container">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Recipe Name"
          required
        />
        <input
          type="text"
          name="img"
          value={form.img}
          onChange={handleChange}
          className="form-control"
          placeholder="Image URL"
        />
        <input
          type="text"
          name="video"
          value={form.video}
          onChange={handleChange}
          className="form-control"
          placeholder="Video URL"
        />
        <textarea
          name="ingradiants"
          value={form.ingradiants}
          onChange={handleChange}
          className="form-control"
          placeholder="Ingredients"
          rows="3"
        />
        <textarea
          name="desc"
          value={form.desc}
          onChange={handleChange}
          className="form-control"
          placeholder="Description"
          rows="3"
        />
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          className="form-control"
          placeholder="Famous From (Country)"
        />
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Rating</option>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>
        <button type="submit" className="btn btn-primary mt-3">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
