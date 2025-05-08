import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './form-Crud.css';


const getData = () => {
  return JSON.parse(localStorage.getItem('data')) || [];
}

function FormExample() {
  const defaultUser = {
    id: '',
    fname: '',
    lname: '',
    city: '',
    state: '',
    salary: ''
  };

  const [input, setInput] = useState(defaultUser);
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newEntry = { ...input, id };

    setData(prev => [...prev, newEntry]);
    setInput(defaultUser);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('Employee', JSON.stringify(data));
    }
  }, [data]);

  return (
    <>
      <div className="container mx-auto">
        <Form noValidate onSubmit={handleSubmit} className="main-form">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="fname"
              value={input.fname}
              onChange={handleInput}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lname"
              value={input.lname}
              onChange={handleInput}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              name="city"
              value={input.city}
              onChange={handleInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Salary"
              required
              name="salary"
              value={input.salary}
              onChange={handleInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid salary.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              required
              name="state"
              value={input.state}
              onChange={handleInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="mt-3">
            Submit form
          </Button>
        </Form>
      </div>
    </>
  );
}

export default FormExample;
