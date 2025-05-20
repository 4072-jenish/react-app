import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo-img.png';


function HeaderComp() {
  return (
        <div className="container mx-auto text-center ">
          <Navbar expand="lg" className="bg-body-tertiary w-100 ">
              <Container className=' justify-content-between align-items-center'>
                  <Navbar.Brand href="/">
                      <img src={logo} alt="" className='img-fluid  header-img' />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto gap-3">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="#link">About-me</Nav.Link>
                          <Nav.Link href="#link">Skills</Nav.Link>
                          <Nav.Link href="#link">Projects</Nav.Link>
                          <Nav.Link href="#link">Conatact me</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
  );
}

export default  HeaderComp;