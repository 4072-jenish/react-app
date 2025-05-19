import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPatients, savePatients } from "../utils/storage";

const AddPatient = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    date: "",
    wNumber: "",
    doctor: ""
  }); 

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.age.trim()) {
      newErrors.age = "Age is required";
    } else if (+form.age <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    if (!form.gender) newErrors.gender = "Gender is required";

    if (!form.contact.trim()) {
      newErrors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(form.contact)) {
      newErrors.contact = "Contact must be a 10-digit number";
    }

    if (!form.address.trim()) newErrors.address = "Address is required";

    if (!form.date.trim()) {
      newErrors.date = "Admit date is required";
    } else if (form.date > today) {
      newErrors.date = "Admit date cannot be in the future";
    }

    if (!form.wNumber.trim()) newErrors.wNumber = "Ward number is required";

    if (!form.doctor.trim()) newErrors.doctor = "Doctor name is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const newPatient = { ...form, id: Date.now() };
      const patients = getPatients();
      savePatients([...patients, newPatient]);
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Add Customer</h2>

        <label>Full Name :-</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <span style={styles.error}>{errors.name}</span>}

        <label>Age :-</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.age && <span style={styles.error}>{errors.age}</span>}

        <label>Gender :-</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        {errors.gender && <span style={styles.error}>{errors.gender}</span>}

        <label>Contact :-</label>
        <input
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.contact && <span style={styles.error}>{errors.contact}</span>}

        <label>Address :-</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.address && <span style={styles.error}>{errors.address}</span>}

        <label>Admit Date :-</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.date && <span style={styles.error}>{errors.date}</span>}

        <label>Ward Number :-</label>
        <input
          name="wNumber"
          value={form.wNumber}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.wNumber && <span style={styles.error}>{errors.wNumber}</span>}

        <label>Assigned Doctor Name :-</label>
        <input
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.doctor && <span style={styles.error}>{errors.doctor}</span>}

        <button type="submit" style={styles.button}>
          Submit
        </button>
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
    alignItems: "center"
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

export default AddPatient;
 