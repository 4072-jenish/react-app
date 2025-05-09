import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './form-Crud.css';

// React Icons
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const getData = () => {
  return JSON.parse(localStorage.getItem('Employee')) || [];
};

function FormExample() {
  const defaultUser = {
    id: '',
    fname: '',
    lname: '',
    city: '',
    salary: '',
    image: ''
  };

  const [input, setInput] = useState(defaultUser);
  const [data, setData] = useState(getData());
  const [editId, setEditId] = useState(null);
  const [showView, setShowView] = useState(false);
  const [viewData, setViewData] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...input, id: editId } : item
      );
      setData(updatedData);
      setEditId(null);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newEntry = { ...input, id };
      setData((prev) => [...prev, newEntry]);
    }

    setInput(defaultUser);
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleEdit = (item) => {
    setInput(item);
    setEditId(item.id);
  };

  const handleView = (item) => {
    setViewData(item);
    setShowView(true);
  };

  const handleCloseView = () => {
    setShowView(false);
    setViewData(null);
  };

  useEffect(() => {
    localStorage.setItem('Employee', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container mx-auto">
      {/* Form */}
      <Form noValidate onSubmit={handleSubmit} className="main-form">
        <Form.Group as={Col} md="12">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="fname"
            value={input.fname}
            onChange={handleInput}
            placeholder="First name"
          />
        </Form.Group>

        <Form.Group as={Col} md="12">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lname"
            value={input.lname}
            onChange={handleInput}
            placeholder="Last name"
          />
        </Form.Group>

        <Form.Group as={Col} md="12">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            name="city"
            value={input.city}
            onChange={handleInput}
            placeholder="City"
          />
        </Form.Group>

        <Form.Group as={Col} md="12">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            required
            type="number"
            name="salary"
            value={input.salary}
            onChange={handleInput}
            placeholder="Salary"
          />
        </Form.Group>

        <Form.Group as={Col} md="12">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            required
            type="text"
            name="image"
            value={input.image}
            onChange={handleInput}
            placeholder="Paste image URL here"
          />
        </Form.Group>

        <Button type="submit" className="mt-3">
          {editId ? 'Update' : 'Submit'}
        </Button>
      </Form>

      {/* Display Cards */}
      <div className="view-form mt-5">
        {data.map((item) => (
          <div key={item.id} className="row mb-4 border p-3 rounded align-items-center">
            <div className="col-md-6">
              <img
                src={item.image || 'https://via.placeholder.com/300x200'}
                alt="Employee"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h5>{item.fname} {item.lname}</h5>
              <p><strong>City:</strong> {item.city}</p>
              <p><strong>Salary:</strong> ₹{item.salary}</p>
              <div className="d-flex gap-2 mt-2">
                <Button variant="info" size="sm" onClick={() => handleView(item)} title="View">
                  <FaEye />
                </Button>
                <Button variant="warning" size="sm" onClick={() => handleEdit(item)} title="Edit">
                  <FaEdit />
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)} title="Delete">
                  <FaTrash />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Modal */}
      <Modal show={showView} onHide={handleCloseView} centered>
        <Modal.Header closeButton>
          <Modal.Title>Employee Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {viewData && (
            <>
              <img
                src={viewData.image || 'https://via.placeholder.com/300x200'}
                alt="Employee"
                className="img-fluid mb-3"
              />
              <h5>{viewData.fname} {viewData.lname}</h5>
              <p><strong>City:</strong> {viewData.city}</p>
              <p><strong>Salary:</strong> ₹{viewData.salary}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseView}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormExample;
