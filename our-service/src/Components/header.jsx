import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/image/logo.png';
import { IoIosSearch } from "react-icons/io";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex ">
      <Container fluid="sm">
        <Navbar.Brand href="#"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
            <NavDropdown title="Home" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Home page 01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Home page 02</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Home page 03</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Home page 04</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Home page 05</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Home RTL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Home OnePage</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Header style</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Our Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Our Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Testimonial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">404</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <div className="d-flex justify-content-between">
              <div className="shop-page px-3">
                <h5 className='ps-3 pb-4'>Shop Page</h5>
               <NavDropdown.Item href="#action3">shpo page 01</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action4">shpo page 02</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action5">shpo page 03</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action6">shpo page 04</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action7">shpo page 05</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action8">shpo page 06</NavDropdown.Item>
               </div>
               <div className="product-details-page px-3 ps-3 pb-4">
               <h5>Product Details Page</h5>
               <NavDropdown.Item href="#action3">Product details 01</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">Product details 02</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">Product details 03</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">Product details 04</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">Product details 05</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">Product details 06</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">Product details 07</NavDropdown.Item>
               </div>
               <div className="other-shop-page px-3">
               <h5>Other Shop Page</h5>
               <NavDropdown.Item href="#action3">Cart Page</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">Check Out Page</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action3">My Account Page</NavDropdown.Item>
               </div>
              </div>
            </NavDropdown>
            <NavDropdown title="Elements" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
        <Nav>
        <Nav.Link href="#features"><IoIosSearch /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;