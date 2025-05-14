import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPatients, savePatients } from "../utils/storage";

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", age: "", gender: "", contact: "", address: "" });

  useEffect(() => {
    const patients = getPatients();
    const patient = patients.find((p) => p.id === Number(id));
    if (patient) setForm(patient);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const patients = getPatients().map((p) =>
      p.id === Number(id) ? form : p
    );
    savePatients(patients);
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Edit Patient</h2>

        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} style={styles.input} />

        <label>Age</label>
        <input type="number" name="age" value={form.age} onChange={handleChange} style={styles.input} />

        <label>Gender</label>
        <select name="gender" value={form.gender} onChange={handleChange} style={styles.input}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Contact</label>
        <input name="contact" value={form.contact} onChange={handleChange} style={styles.input} />

        <label>Address</label>
        <textarea name="address" value={form.address} onChange={handleChange} style={styles.input}></textarea>

        <button type="submit" style={styles.button}>Save Changes</button>
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

export default EditPatient;
