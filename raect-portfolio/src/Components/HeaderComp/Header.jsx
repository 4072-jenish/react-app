import { useEffect, useState } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function HeaderComp() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/" className="brand-logo">
          <div className="logo-container">
            <span className="logo-main">JENISH</span>
            <span className="logo-underline"></span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="custom-toggler"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { href: "/", label: "Home", key: "home" },
              { href: "/aboutComp", label: "About", key: "about" },
              { href: "/skills", label: "Skills", key: "skills" },
              { href: "/projectComp", label: "Projects", key: "projects" },
              { href: "/faq", label: "FAQs", key: "faq" },
              { href: "/contactUs", label: "Contact", key: "contact" }
            ].map((item) => (
              <Nav.Link
                key={item.key}
                href={item.href}
                className={`nav-link-item ${
                  activeLink === item.key ? 'active' : ''
                }`}
                onClick={() => handleSetActive(item.key)}
              >
                {item.label}
                <span className="link-underline"></span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default  HeaderComp;