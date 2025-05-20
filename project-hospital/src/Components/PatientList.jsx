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
    if (window.confirm("Are you sure you want to delete this patient?")) {
      const updated = allPatients.filter((p) => p.id !== id);
      savePatients(updated);
      setAllPatients(updated);
      setPatients(updated);
      setCurrentPage(1);
    }
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
    <div className="container   mt-5 ">
      <div style={styles.header} className="mb-5 d-flex  justify-content-around">
        <h2> <strong>Patinent</strong> List</h2>
        <div className="search d-flex align-items-center gap-3">
          <input  type="text"  placeholder="Enter your field..."  value={search} onChange={handleChanged} className="form-control" />
          <button onClick={handleSearch} style={styles.addButton}>Search</button>
          <button onClick={handleClear} style={styles.addButton}> Clear</button>
        </div>
        <Link to="/add" style={styles.addButton}>
          Add Customer
        </Link>
      </div>

      {patients.length === 0 ? (
        <p>No Customer found.</p>
      ) : (
        <div style={{ overflowX: "auto" }} className="col-12">
          <table style={styles.table} className="table text-center">
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
                    <Link to={`/view/${p.id}`} style={styles.link}>
                      View
                    </Link>{" "}
                    |{" "}
                    <Link to={`/edit/${p.id}`} style={styles.link}>
                      Edit
                    </Link>{" "}
                    |{" "}
                    <button onClick={() => deletePatient(p.id)} style={styles.delete}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bootstrap Pagination */}
          <nav aria-label="Page navigation example" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </button>
              </li>

              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
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
    flexWrap: "wrap",
    gap: "1rem"
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
};

export default PatientList;
