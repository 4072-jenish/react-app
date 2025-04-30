import React, { useState } from "react";

const FormValidation = ({ successMessage = "🎉 Submitted Successfully!" }) => {
  const defaultUser = {
    fname: "",
    lname: "",
    email: "",
    mobileNo: "",
    password: "",
  };

  const [input, setInput] = useState(defaultUser);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!input.fname) newErrors.fname = "Required";
    if (!input.lname) newErrors.lname = "Required";
    if (!input.email) newErrors.email = "Required";
    if (!input.password) newErrors.password = "Required";
    if (!input.mobileNo) newErrors.mobileNo = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Submitted:", input);
    setInput(defaultUser);
    setErrors({});
    setSubmitted(true);
    setShowForm(false);

    setTimeout(() => {
      setShowForm(true);
      setSubmitted(false);
    }, 3000);
  };

  const styleSheet = `
    @keyframes neon-glow {
      0%, 100% {
        box-shadow: 0 0 5px rgb(91, 241, 255), 0 0 10px rgb(91, 241, 255);
      }
      50% {
        box-shadow: 0 0 20px rgb(91, 241, 255);
      }
    }

    @keyframes success-fade {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
  `;

  const neon = "rgb(91, 241, 255)";

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      borderRadius: "12px",
      backgroundColor: "#0f0f0f",
      color: neon,
      fontFamily: "'Orbitron', sans-serif",
      boxShadow: `0 0 15px ${neon}`,
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      marginBottom: "20px",
      textShadow: `0 0 5px ${neon}`,
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      textShadow: `0 0 3px ${neon}`,
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      animation: "neon-glow 1.5s infinite alternate",
      outline: "none",
      marginBottom: "10px",
    },
    errorText: {
      color: "#ff4d4d",
      fontSize: "12px",
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "6px",
      backgroundColor: "transparent",
      color: neon,
      border: `2px solid ${neon}`,
      fontWeight: "bold",
      cursor: "pointer",
      animation: "neon-glow 1.5s infinite alternate",
      textShadow: `0 0 5px ${neon}`,
    },
    success: {
      marginTop: "20px",
      textAlign: "center",
      color: "#0f0",
      fontWeight: "bold",
      fontSize: "20px",
      textShadow: "0 0 10px #0f0",
      animation: "success-fade 1s ease-out forwards",
    },
  };

  return (
    <>
      <style>{styleSheet}</style>
      <div style={styles.container}>
        <h2 style={styles.title}></h2>

        {showForm ? (
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>First Name:</label>
            <input type="text" name="fname" value={input.fname} onChange={handleInput} style={styles.input} />
            {errors.fname && <div style={styles.errorText}>{errors.fname}</div>}

            <label style={styles.label}>Last Name:</label>
            <input type="text" name="lname" value={input.lname} onChange={handleInput} style={styles.input} />
            {errors.lname && <div style={styles.errorText}>{errors.lname}</div>}

            <label style={styles.label}>Email:</label>
            <input type="text" name="email" value={input.email} onChange={handleInput} style={styles.input} />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}

            <label style={styles.label}>Password:</label>
            <input type="password" name="password" value={input.password} onChange={handleInput} style={styles.input} />
            {errors.password && <div style={styles.errorText}>{errors.password}</div>}

            <label style={styles.label}>Mobile Number:</label>
            <input type="text" name="mobileNo" value={input.mobileNo} onChange={handleInput} style={styles.input} />
            {errors.mobileNo && <div style={styles.errorText}>{errors.mobileNo}</div>}

            <button type="submit" style={styles.button}>SUBMIT</button>
          </form>
        ) : submitted && (
          <div style={styles.success}>{successMessage}</div>
        )}
      </div>
    </>
  );
};

export default FormValidation;
