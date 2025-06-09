import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getResepie } from "../Services/storage";

const ViewRecipes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = getResepie() || [];

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <div className="container mt-5">
        <h2>Recipe not found</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-3">{recipe.name}</h1>
      <img
        src={recipe.img}
        alt={recipe.name}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <p className="mt-3"><strong>Description:</strong> {recipe.desc}</p>
      <p><strong>Ingredients:</strong> {recipe.ingradiants}</p>
      <p><strong>Video:</strong> {recipe.video ? <a href={recipe.video} target="_blank">Watch Video</a> : "No video available"}</p>
      <p><strong>Rating:</strong> {recipe.rating}</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default ViewRecipes;
