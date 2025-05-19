import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatients, savePatients } from "../utils/storage";

const PatientList = () => {
  const [allPatients, setAllPatients] = useState([]);
  const [patients, setPatients] = useState([]);      
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const data = getPatients();
    setAllPatients(data);
    setPatients(data);
  }, []);

  const deletePatient = (id) => {
    const updated = allPatients.filter((p) => p.id !== id);
    savePatients(updated);
    setAllPatients(updated);
    setPatients(updated);
    setCurrentPage(1);
  };

  const handleChanged = (e) => {
    setSearch(e.target.value);
  };    

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = allPatients.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.age.toString().includes(search) ||
      p.gender.toLowerCase().includes(search.toLowerCase())
    );
    setPatients(filtered);
    setSearch("");
    setCurrentPage(1); 
  };

  const handleClear = () => {
    setPatients(allPatients);
    setSearch("");
    setCurrentPage(1);
  };

  const handleAsc = () => {
    const sorted = [...patients].sort((a, b) => a.age - b.age);
    setPatients(sorted);
    setCurrentPage(1);
  };

  const handleDesc = () => {
    const sorted = [...patients].sort((a, b) => b.age - a.age);
    setPatients(sorted);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = patients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(patients.length / itemsPerPage);

  return (
    <div className="container">
      <div style={styles.header}>
        <h2>Customer List</h2>
        <div className="search d-flex align-items-center gap-5">
          <input
            type="text"
            placeholder="Enter your field..."
            value={search}
            onChange={handleChanged}
          />
          <button onClick={handleSearch} style={styles.addButton}>Search</button>
          <button onClick={handleClear} style={styles.addButton}>Clear</button>
        </div>
        <Link to="/add" style={styles.addButton}>Add Customer</Link>
      </div>

      {patients.length === 0 ? (
        <p>No Customer found.</p>
      ) : (
        <div style={{ overflowX: "auto" }} className="col-12">
          <table style={styles.table} className="text-center">
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>
                  Age{" "}
                  <button onClick={handleAsc} style={styles.cursor}>🔼</button>{" "}
                  <button onClick={handleDesc} style={styles.cursor}>🔽</button>
                </th>
                <th style={styles.th}>Gender</th>
                <th style={styles.th}>Contact</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPatients.map((p) => (
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

          <div className="pagination d-flex justify-content-center mt-4 gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={styles.paginationButton}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                style={{
                  ...styles.paginationButton,
                  fontWeight: currentPage === index + 1 ? "bold" : "normal",
                }}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={styles.paginationButton}
            >
              Next
            </button>
          </div>
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
    border: "none",
    cursor: "pointer",
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
  cursor: {
    cursor: "pointer",
    background: "none",
    border: "none",
  },
  paginationButton: {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#f8f9fa",
    cursor: "pointer",
  },
};

export default PatientList;
