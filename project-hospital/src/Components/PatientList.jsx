import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatients, savePatients } from "../utils/storage";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(getPatients());
  }, []);

  const deletePatient = (id) => {
    const updated = patients.filter((p) => p.id !== id);
    savePatients(updated);
    setPatients(updated);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Patient List</h2>
        <Link to="/add" style={styles.addButton}>+ Add Patient</Link>
      </div>

      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Age</th>
                <th style={styles.th}>Gender</th>
                <th style={styles.th}>Contact</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>
                  <td style={styles.td}>{p.name}</td>
                  <td style={styles.td}>{p.age}</td>
                  <td style={styles.td}>{p.gender}</td>
                  <td style={styles.td}>{p.contact}</td>
                  <td style={styles.td}>
                    <Link to={`/view/${p.id}`} style={styles.link}>View</Link> |{" "}
                    <Link to={`/edit/${p.id}`} style={styles.link}>Edit</Link> |{" "}
                    <button onClick={() => deletePatient(p.id)} style={styles.delete}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "4px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#f2f2f2",
    textAlign: "left",
    padding: "10px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
  },
  delete: {
    color: "red",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default PatientList;
