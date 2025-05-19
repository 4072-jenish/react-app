import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatients } from "../utils/storage";

const ViewPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const patients = getPatients();
    const found = patients.find((p) => p.id === Number(id));
    if (found) setPatient(found);
  }, [id]);

  if (!patient) return <p style={{ padding: "20px" }}>Customer not found.</p>;

  return (
    <div style={styles.container}> 
      <div style={styles.card}>
        <h2>Customer Details</h2>
        <table style={styles.table}>
          <tbody>
            <tr>
              <th style={styles.th}>paitetn id</th>
              <td>{patient.id}</td>
            </tr>
            <tr>
              <th style={styles.th}>Name</th>
              <td>{patient.name}</td>
            </tr>
            <tr>
              <th style={styles.th}>Age</th>
              <td>{patient.age}</td>
            </tr>
            <tr>
              <th style={styles.th}>Gender</th>
              <td>{patient.gender}</td>
            </tr>
            <tr>
              <th style={styles.th}>Contact</th>
              <td>{patient.contact}</td>
            </tr>
            <tr>
              <th style={styles.th}>Address</th>
              <td>{patient.address}</td>
            </tr>
            <tr>
              <th style={styles.th}>Admite Date</th>
              <td>{patient.date}</td>
            </tr>
            <tr>
              <th style={styles.th}>Word Number</th>
              <td>{patient.wNumber}</td>
            </tr>
            <tr>
              <th style={styles.th}>Asigned doctor</th>
              <td>{patient.doctor}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/" style={styles.back}>← Back to List</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "6px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
  th: {
    textAlign: "left",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    width: "30%",
  },
  td: {
    padding: "8px",
  },
  back: {
    marginTop: "15px",
    display: "inline-block",
    textDecoration: "none",
    color: "#007bff",
  },
};

export default ViewPatient;
