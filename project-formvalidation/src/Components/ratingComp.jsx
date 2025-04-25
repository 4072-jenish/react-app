import React, { useState } from "react";

const RatingComp = ({ successMessage = "🎉 Submitted Successfully!" }) => {
  const defaultUser = {
    fname: "",
    lname: "",
    email: "",
    rating: [],
    comments: "",
  };

  const [input, setInput] = useState(defaultUser);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [submittedData, setSubmittedData] = useState([]);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedRatings = checked
        ? [...input.rating, value]
        : input.rating.filter((r) => r !== value);
      setInput({ ...input, rating: updatedRatings });
    } else {
      setInput({ ...input, [name]: value });
    }

    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!input.fname) newErrors.fname = "Required";
    if (!input.lname) newErrors.lname = "Required";
    if (!input.email) newErrors.email = "Required";
    if (input.rating.length === 0) newErrors.rating = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmittedData([...submittedData, input]);
    setInput(defaultUser);
    setSubmitted(true);
    setShowForm(false);

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(true);
    }, 3000);
  };

  const neon = "#00f0ff";

  const styleSheet = `
    @keyframes pulse {
      0% { box-shadow: 0 0 10px ${neon}; }
      50% { box-shadow: 0 0 20px ${neon}; }
      100% { box-shadow: 0 0 10px ${neon}; }
    }

    @keyframes success-fade {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
  `;

  const styles = {
    container: {
      maxWidth: "550px",
      margin: "50px auto",
      padding: "30px",
      borderRadius: "16px",
      backgroundColor: "#0c0c0c",
      color: neon,
      fontFamily: "'Orbitron', sans-serif",
      border: `2px solid ${neon}`,
      boxShadow: `0 0 20px ${neon}`,
      animation: "pulse 2s infinite",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
      textShadow: `0 0 4px ${neon}`,
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: `2px solid ${neon}`,
      backgroundColor: "#1a1a1a",
      color: "#fff",
      marginBottom: "15px",
      boxShadow: `0 0 10px ${neon}`,
      outline: "none",
    },
    checkboxRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
    },
    checkboxWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    checkbox: {
      width: "24px",
      height: "24px",
      accentColor: neon,
      cursor: "pointer",
      boxShadow: `0 0 8px ${neon}`,
    },
    error: {
      color: "#ff4d4d",
      fontSize: "12px",
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      padding: "14px",
      borderRadius: "10px",
      backgroundColor: "transparent",
      color: neon,
      border: `2px solid ${neon}`,
      fontWeight: "bold",
      cursor: "pointer",
      textShadow: `0 0 6px ${neon}`,
      boxShadow: `0 0 12px ${neon}`,
      transition: "transform 0.2s",
    },
    buttonHover: {
      transform: "scale(1.05)",
    },
    success: {
      marginTop: "20px",
      textAlign: "center",
      color: "#00ff88",
      fontSize: "20px",
      fontWeight: "bold",
      textShadow: "0 0 10px #00ff88",
      animation: "success-fade 1s ease-out forwards",
    },  
    table: {
      marginTop: "30px",
      width: "100%",
      color: "#fff",
      borderCollapse: "collapse",
    },
    thtd: {
      border: `1px solid ${neon}`,
      padding: "10px",
      textAlign: "left",
    },
  };

  return (
    <>
      <style>{styleSheet}</style>
      <div style={styles.container}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", textShadow: `0 0 6px ${neon}` }}>
           Rating Form
        </h2>

        {showForm ? (
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>First Name</label>
            <input style={styles.input} name="fname" value={input.fname} onChange={handleInput} />
            {errors.fname && <div style={styles.error}>{errors.fname}</div>}

            <label style={styles.label}>Last Name</label>
            <input style={styles.input} name="lname" value={input.lname} onChange={handleInput} />
            {errors.lname && <div style={styles.error}>{errors.lname}</div>}

            <label style={styles.label}>Email</label>
            <input style={styles.input} name="email" value={input.email} onChange={handleInput} />
            {errors.email && <div style={styles.error}>{errors.email}</div>}

            <label style={styles.label}>Your Rating</label>
            <div style={styles.checkboxRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} style={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    value={star}
                    name="rating"
                    checked={input.rating.includes(String(star))}
                    onChange={handleInput}
                    style={styles.checkbox}
                  />
                  <span style={{ marginTop: "5px", color: "#fff" }}>⭐ {star}</span>
                </div>
              ))}
            </div>
            {errors.rating && <div style={styles.error}>{errors.rating}</div>}

            <label style={styles.label}>Comments</label>
            <textarea
              name="comments"
              value={input.comments}
              onChange={handleInput}
              rows={4}
              style={styles.input}
            />

            <button type="submit" style={styles.button}>SUBMIT</button>
          </form>
        ) : (
          submitted && <div style={styles.success}>{successMessage}</div>
        )}

        {submittedData.length > 0 && (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.thtd}>First Name</th>
                <th style={styles.thtd}>Last Name</th>
                <th style={styles.thtd}>Email</th>
                <th style={styles.thtd}>Rating</th>
                <th style={styles.thtd}>Comments</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((entry, idx) => (
                <tr key={idx}>
                  <td style={styles.thtd}>{entry.fname}</td>
                  <td style={styles.thtd}>{entry.lname}</td>
                  <td style={styles.thtd}>{entry.email}</td>
                  <td style={styles.thtd}>{entry.rating.join(", ")}</td>
                  <td style={styles.thtd}>{entry.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default RatingComp;
