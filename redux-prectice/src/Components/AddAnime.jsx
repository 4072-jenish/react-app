import generateUniqueId from "generate-unique-id";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";

const  AddAnime = () => {

    const navigate = useNavigate();
    const defaultForm = {
            id: "",
            title: "",
            date:"",
            desc: "",
            image: "",
            creat:""
        }
    const [inputForm, setinputForm] =  useState( defaultForm)

    const handleChange = (e) => {
        const { name, value } = e.target;
    setinputForm({
      ...inputForm,
      [name]: value,
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm);
    }

    return(
        <>

            <Form style={styles.form} onSubmit={handleSubmit()}   className="d-flex flex-column justify-content-center align-items-center text-left">
            <h2 style={styles.title}>Add Anime</h2>

                <label>Title  :-</label>
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
                    type="text"
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

        </>
    )
}

const styles = {
    container: {
      padding: "30px",
      backgroundColor: "#f2f2f2",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    inputForm: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    },
    title: {
      textAlign: "center",
      marginBottom: "10px"
    },
    input: {
      padding: "8px",
      fontSize: "14px",
      borderRadius: "4px",
      border: "1px solid #ccc"
    },
    button: {
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      fontWeight: "bold",
      borderRadius: "4px",
      cursor: "pointer"
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginTop: "-8px",
      marginBottom: "5px"
    }
  };


  export default AddAnime;