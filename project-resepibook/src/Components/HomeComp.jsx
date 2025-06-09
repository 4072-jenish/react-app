import React from "react";
import { Link } from "react-router"; 
import logo from "../assets/logo.png"
import { getResepie } from "../Services/storage";

const HomeComp = () => {
    const recipe = getResepie() || [];
    console.log(recipe);
    
    return (

        <>
            <header>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="logo">
                            <img src={logo} style={{width: "100px"}}/>
                        </div>
                        <nav>
                            <ul>
                                   <Link to={'/addRecipe'} className="btn btn-primary">Add Recipe</Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="Show-recipes">
                <div className="container">
                    <div className="recipe-cards">
                        <div className="d-flex">
                                  {
                                      recipe.map((item) => {
                                          <div className="col-4">
                                  <div className="recipe-img"><img src={item.img} alt="" /></div>
                                  <div className="recipe-content">
                                      <h3>{item.title}</h3>
                                      <p>{item.description}</p>
                                      <div className="d-flex">
                                        <button className="btn btn-primary">View</button>
                                        <button className="btn btn-warning">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                      </div>
                                  </div>
                              </div>
                                    })
                                  }
                           </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeComp;