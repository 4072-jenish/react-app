import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecipe , editRecipe } from "../Services/Actions/recipieActions";

const HomeComp = () => {
  const { recipes, loading } = useSelector((state) => state.recipie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/viewRecepis/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      dispatch(deleteRecipe(id));
    }
  };
  
  const handleEdit = (id) => {
    navigate("/editRecipe/${id}")
        dispatch(editRecipe(id))
  }


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
          <div className="d-flex flex-wrap">
            {recipes.length > 0 ? (
              recipes.map((item) => (
                <div className="col-4 p-2" key={item.id}>
                  <h1>{item.id}</h1>
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
                    <div className="d-flex justify-content-between mt-3">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleView(item.id)}
                      >
                        View
                      </button>
                      <button className="btn btn-warning" onClick={() => handleEdit(item.id)}>Edit</button>
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
              <p>No recipes found. Please add some recipes!</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComp;
