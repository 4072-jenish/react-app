import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editRecipe } from "../Services/Actions/recipieActions";

const EditRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recipes } = useSelector((state) => state.recipie);

  const [recipe, setRecipe] = useState({
    id: null,
    name: "",
    desc: "",
    img: "",
    rating: "",
    video: "",
    ingradiants: "",
  });

  useEffect(() => {
    const recipeToEdit = recipes.find((r) => r.id === Number(id));
    if (recipeToEdit) {
      setRecipe(recipeToEdit);
    }
  }, [id, recipes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editRecipe(recipe)); 
    navigate("/");

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Recipe Name</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Recipe Name"
          />
        </div>

        <div className="form-group mb-3">
          <label>Recipe Image URL</label>
          <input
            type="text"
            name="img"
            value={recipe.img}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Image URL"
          />
        </div>

        <div className="form-group mb-3">
          <label>Recipe Video URL</label>
          <input
            type="text"
            name="video"
            value={recipe.video}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Video URL"
          />
        </div>

        <div className="form-group mb-3">
          <label>Recipe Ingredients</label>
          <textarea
            name="ingradiants"
            value={recipe.ingradiants}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Ingredients"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label>Recipe Description</label>
          <textarea
            name="desc"
            value={recipe.desc}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Description"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label>Recipe Rating</label>
          <select
            name="rating"
            value={recipe.rating}
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
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};
}

export default EditRecipe;
