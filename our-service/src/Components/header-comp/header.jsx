import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/image/logo.png';
import { IoIosSearch } from "react-icons/io";
import { SlHeart } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import './header.css'

function NavScrollExample() {
  
  return (
    <>
     {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary py-4 ">
          <Container fluid="sm">
          <Navbar.Brand href="#"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='justify-content-center'>
               <Nav className="my-2 my-lg-0"style={{ maxHeight: '100px'}}navbarScroll>
            <NavDropdown title="Home" id="navbarScrollingDropdown" className='px-3 fw-semibold  $black#000' style={{color: '#000'}} >
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
            <NavDropdown title="Pages" id="navbarScrollingDropdown" className='px-3 fw-semibold  $black#000' style={{color: '#000'}} >
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
            <NavDropdown title="Shop" id="navbarScrollingDropdown" className='px-3 fw-semibold  $black#000' style={{color: '#000'}} >
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
            <NavDropdown title="Elements" id="navbarScrollingDropdown" className='px-3 fw-semibold  $black#000' style={{color: '#000'}} >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="navbarScrollingDropdown" className='px-3 fw-semibold  $black#000' style={{color: '#000'}} >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact" id="navbarScrollingDropdown" className='px-3 fw-semibold  $black#000' style={{color: '#000'}} >
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
              <Nav className='d-flex flex-row gap-2 '>
              <Nav.Link href="#features" className='header-icon'><IoIosSearch style={{fontSize:"25px"}}/></Nav.Link>
              <Nav.Link href="#features" className='header-icon'><SlHeart  style={{fontSize:"25px"}}/></Nav.Link>
              <Nav.Link href="#features" className='header-icon'><BsPerson  style={{fontSize:"25px"}}/></Nav.Link>
              <Nav.Link href="#features" className='header-icon' style={{position:"relative"}}><BsCart3  style={{fontSize:"25px"}}/></Nav.Link>
              <p style={{position:"absolute",top:"15px",right:"305px",fontSize:"10px",backgroundColor:"#2e2e2e",color:"white",borderRadius:"50%",padding:"2px 7px",boxShadow:"0px 0px 5px 0px #2e2e2e"}}>3</p> 
              </Nav>
          </Container>
        </Navbar>
      ))}

    </>
             
  );
}
export default NavScrollExample;


   