
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getResepie, setResepie as saverecipeToStorage } from "../Services/storage";
const AddRecipe = () => {
    
      const initialState = {
        name: "",
        desc: "",
        img: "",
        rating: "",
      };
    
      const [recipe, setResepie] = useState(initialState);
      const navigate = useNavigate();
      const dispatch = useDispatch();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setResepie({ ...recipe, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(recipe);
    
        const recipeWithId = { ...recipe, id: Date.now() }; 
    
        const existingrecipes = Array.isArray(getResepie()) ? getResepie() : [];
    
        const updatedrecipes = [...existingrecipes, recipeWithId];
    
        saverecipeToStorage(updatedrecipes);
    
        dispatch({ type: "ADD_RECIPES", payload: updatedrecipes });
    
        setResepie(initialState);
    
        navigate("/");
      };
    return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-field w-100 d-flex justify-content-between mt-3 p-3">
          <label htmlFor="name" className="col-3">
            Enter Recipe Name:
          </label>
          <input
            className="col-9"
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-field w-100 d-flex justify-content-between mt-3 p-3">
          <label htmlFor="desc" className="col-3">
            Enter Description:
          </label>
          <input
            className="col-9"
            type="text"
            name="desc"
            value={recipe.desc}
            onChange={handleChange}
          />
        </div>

        <div className="input-field w-100 d-flex justify-content-between mt-3 p-3">
          <label htmlFor="rating" className="col-3">
            Enter Rating:
          </label>
          <select
            className="col-9"
            name="rating"
            value={recipe.rating}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option value="⭐">⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <div className="input-field w-100 d-flex justify-content-between mt-3 p-3">
          <label htmlFor="img" className="col-3">
            Enter recipe Poster URL:
          </label>
          <input
            className="col-9"
            type="text"
            name="img"
            value={recipe.img}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddRecipe

