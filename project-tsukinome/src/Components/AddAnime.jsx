import React, { useState } from "react";
import "./addAnime.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAnime, setAnime as saveAnimeToStorage } from "../Services/storage";

const AddAnime = () => {
  const initialState = {
    name: "",
    desc: "",
    img: "",
    rating: "",
  };

  const [anime, setAnime] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnime({ ...anime, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(anime);

    // Add unique id to anime
    const animeWithId = { ...anime, id: Date.now() }; // simple unique id

    // Get existing animes from localStorage
    const existingAnimes = Array.isArray(getAnime()) ? getAnime() : [];

    // Create updated list
    const updatedAnimes = [...existingAnimes, animeWithId];

    // Save updated list to localStorage
    saveAnimeToStorage(updatedAnimes);

    // Update Redux store with the updated list
    dispatch({ type: "ADD_ANIMES", payload: updatedAnimes });

    // Reset form
    setAnime(initialState);

    // Navigate to Home
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-field w-100 d-flex justify-content-between mt-3 p-3">
          <label htmlFor="name" className="col-3">
            Enter Anime Name:
          </label>
          <input
            className="col-9"
            type="text"
            name="name"
            value={anime.name}
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
            value={anime.desc}
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
            value={anime.rating}
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
            Enter Anime Poster URL:
          </label>
          <input
            className="col-9"
            type="text"
            name="img"
            value={anime.img}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddAnime;
