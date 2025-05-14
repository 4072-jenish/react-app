import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPatients, savePatients } from "../utils/storage";

const AddPatient = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultPatient);
  const defaultPatient = {
     name: "", 
     age: "", 
     gender: "", 
     contact: "", 
     address: "" 
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name) {
      alert("Name is required");
      return false;
    }
    if (!form.age) {
      alert("Age is required");
      return false;
    }
    if (!form.gender) {
      alert("Gender is required");
      return false;
    }
    if (!form.contact) {
      alert("Contact is required");
      return false;
    }
    if (!form.address) {
      alert("Address is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newPatient = { ...form, id: Date.now() };
      const patients = getPatients();
      savePatients([...patients, newPatient]);
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Add Patient</h2>

        <label>Name</label>
        <input type="text" name="name"  onChange={handleChange} style={styles.input} />

        <label>Age</label>
        <input type="number" name="age"  onChange={handleChange} style={styles.input} />

        <label>Gender</label>
        <select name="gender"  onChange={handleChange} style={styles.input}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Contact</label>
        <input type="text" name="contact" onChange={handleChange} style={styles.input} />

        <label>Address</label>
        <textarea name="address" onChange={handleChange} style={styles.input}></textarea>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default AddPatient;
