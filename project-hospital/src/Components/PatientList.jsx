import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatients, savePatients } from "../utils/storage";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPatients(getPatients());
  }, []);

  const deletePatient = (id) => {
    const updated = patients.filter((p) => p.id !== id);
    savePatients(updated);
    setPatients(updated);
  };

  const handleChanged = (e) => {
    setSearch(e.target.value);
    
  }
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = patients.filter((p) => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.age.toString().includes(search) ||
      p.gender.toLowerCase().includes(search.toLowerCase())

  
  );
    setPatients(filtered);
    setSearch("");
  }
  const handleClear = () => {
    const clear = getPatients();
    setPatients(clear);
    setSearch("");
  }

  
  const handleAsc = () => {
    const sorted = [...patients].sort((a, b) => a.age - b.age);
    setPatients(sorted);
  }
  const handleDesc = () => {
    const sorted = [...patients].sort((a, b) => b.age - a.age);
    setPatients(sorted);
  }
  
  return (
    <div className="container">
      <div style={styles.header}>
        <h2>Customer List</h2>
          <div className="search d-flex align-items-center gap-5">
          <input type="text"  placeholder="Enter Your feild ..." onChange={handleChanged}/>
          <button onClick={handleSearch} style={styles.addButton}>Search</button>
          <button onClick={handleClear} style={styles.addButton}>Clear</button>
          </div>
        <Link to="/add" style={styles.addButton}> Add Customer</Link>
      </div>

      {patients.length === 0 ? (
        <p>No Customer found.</p>
      ) : (
        <div style={{ overflowX: "auto" }} className="col-12">
          <table style={styles.table} className="text-center">
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th} className="text-center">Age <a onClick={handleAsc} style={styles.cursor}>🔼 Ascending order</a> <a onClick={handleDesc} style={styles.cursor}>🔽 Descending order</a></th>
                <th style={styles.th}>Gender </th>
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
  cursor:{
    cursor: "pointer",
  }
};

export default PatientList;
