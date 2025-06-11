import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editRecipe } from "../Services/Actions/recipieActions";
import './form.css';
const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    const found = recipes.find((r) => String(r.id) === id);
    if (found) {
      setForm(found);
    }
  }, [id, recipes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editRecipe(form));
    navigate("/");
  };

  return (
    <div className="glass-form-container">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Recipe Name"
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
        ></textarea>
        <textarea
          name="desc"
          value={form.desc}
          onChange={handleChange}
          className="form-control"
          placeholder="Description"
          rows="3"
        ></textarea>
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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;
