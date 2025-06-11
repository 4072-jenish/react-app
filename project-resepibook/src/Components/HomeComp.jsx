import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecipe } from "../Services/Actions/recipieActions";

const HomeComp = () => {
  const { recipes } = useSelector((state) => state.recipie); // or resepieReducer if not renamed
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleView = (id) => {
    navigate(`/viewRecepis/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      dispatch(deleteRecipe(id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/editRecipe/${id}`);
  };

  // 🔍 Filter by name or country
  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const countryMatch = recipe.country?.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || countryMatch;
  });

  return (
    <>
      <header>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end">
            <div className="logo">
              <img src={logo} style={{ width: "100px" }} alt="Logo" />
            </div>
            <nav>
              <ul>
                <Link to={"/addRecipe"} className="btn btn-primary">
                  Add Recipe
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="Show-recipes">
        <div className="container mt-4">
          {/* 🔍 Search box */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by recipe name or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="d-flex flex-wrap">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((item) => (
                <div className="col-4 p-2" key={item.id}>
                  <div className="recipe-img">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="recipe-content p-3 border rounded mt-2">
                    <h3>{item.name}</h3>
                    <p><strong>Famous From:</strong> {item.country || "Unknown"}</p>
                    <div className="d-flex justify-content-between mt-3">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleView(item.id)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No recipes found for that search.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComp;
