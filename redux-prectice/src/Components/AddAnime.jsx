import generateUniqueId from "generate-unique-id";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addNewanime } from "../services/Actions/animeActions";
const AddAnime = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultForm = {
    id: "",
    title: "",
    date: "",
    desc: "",
    image: "",
    creat: ""
  };

  const [inputForm, setInputForm] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = generateUniqueId({
      length: 6,
      useLetters: false
    });

    const newAnime = {
      ...inputForm,
      id
    };
    dispatch(addNewanime(newAnime))
    setInputForm(defaultForm);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit} style={styles.form} className="d-flex flex-column justify-content-center align-items-center text-left">
      <h2 style={styles.title}>Add Anime</h2>

      <label>Title :-</label>
      <input
        type="text"
        name="title"
        value={inputForm.title}
        onChange={handleChange}
        style={styles.input}
      />

      <label>Made date :-</label>
      <input
        type="number"
        name="date"
        value={inputForm.date}
        onChange={handleChange}
        style={styles.input}
      />

      <label>Description :-</label>
      <textarea
        name="desc"
        value={inputForm.desc}
        onChange={handleChange}
        style={styles.input}
      />

      <label>Poster URL :-</label>
      <textarea
        name="image"
        value={inputForm.image}
        onChange={handleChange}
        style={styles.input}
      />

      <label>Creator Name :-</label>
      <input
        name="creat"
        value={inputForm.creat}
        onChange={handleChange}
        style={styles.input}
      />

      <button type="submit" style={styles.button} className="mt-3">
        Submit
      </button>
    </Form>
  );
};

const styles = {
  form: {
    padding: "30px",
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    margin: "auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    marginBottom: "10px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default AddAnime;
