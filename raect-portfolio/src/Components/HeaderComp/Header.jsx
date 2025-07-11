import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function HeaderComp() {
  return (
        <div className="container mx-auto text-center ">
          <Navbar expand="lg" className="bg-body-tertiary w-100 ">
              <Container className=' justify-content-between align-items-center'>
                  <Navbar.Brand href="/">
                      <h1 className='logo'>𝕁𝔼ℕ𝕀𝕊ℍ</h1>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto gap-3">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/aboutComp">About-me</Nav.Link>
                          <Nav.Link href="/skills">Skills</Nav.Link>
                          <Nav.Link href="/projectComp">Projects</Nav.Link>
                          <Nav.Link href="/faq">FAQs</Nav.Link>
                          <Nav.Link href="/contactUs">Conatact me</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
  );
}

export default  HeaderComp;