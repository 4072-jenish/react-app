import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import './Navbar.css';
import { IoSearch } from 'react-icons/io5';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { PiShoppingCart } from 'react-icons/pi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../../assets/images/logo.png';

function NavbarSection() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  const [activeAccordionKey, setActiveAccordionKey] = useState(null);
  const toggleAccordion = (key) => {
    setActiveAccordionKey(activeAccordionKey === key ? null : key);
  };

  return (
    <>
      <Navbar expand="lg" className="p-0 ">
        <Container className="p-0 ">
          <div className="Navbar-Wrapper  w-100 d-flex justify-content-between align-items-center">
            <div className="Navbar-logo">
              <Navbar.Brand href="#" className="m-0">
                <div className="Navbar-logo">
                  <img src={logo} alt="" />
                </div>
              </Navbar.Brand>
            </div>

            <div className="Navbar-list-wrapper">
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                onClick={handleOffcanvasShow}
              />
              <Navbar.Collapse id="navbarScroll" className="d-none d-lg-block">
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <div className="DropDown-Container  d-flex gap-3">
                    {/* Home Dropdown */}
                    <div className="Home-DropDown">
                      <NavDropdown
                        title={
                          <>
                            Home
                            <MdKeyboardArrowDown
                              style={{ marginLeft: '5px' }}
                            />
                          </>
                        }
                        id="navbarScrollingDropdown"
                      >
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Home Page 01
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Home Page 02
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Home Page 03
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Home Page 04
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Home Page 05
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Home RTL
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Home OnePage
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Header Style
                          </li>
                        </a>
                      </NavDropdown>
                    </div>

                    <div className="Pages-DropDown">
                      <NavDropdown
                        title={
                          <>
                            Pages
                            <MdKeyboardArrowDown
                              style={{ marginLeft: '4px' }}
                            />
                          </>
                        }
                        id="navbarScrollingDropdown"
                      >
                        <a href="#" target="_blank">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            About Us
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Our Service
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Our Team
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Testimonials
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            404
                          </li>
                        </a>
                      </NavDropdown>
                    </div>

                    <div className="Shope-DropDown">
                      <NavDropdown
                        title={
                          <>
                            Shop
                            <MdKeyboardArrowDown
                              style={{ marginLeft: '4px' }}
                            />
                            <span></span>
                          </>
                        }
                        id="navbarScrollingDropdown"
                      >
                        <div className="dropdown-custom-container">
                          <div className="shop-row-wrapper">
                            <div className="shop-section">
                              <h4>Shop Page</h4>

                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 01
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 02
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 03
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 04
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 05
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 06
                                </li>
                              </a>
                            </div>
                            <div className="shop-section">
                              <h4>Product Details Page</h4>
                              <a href="#" target="_blank">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 01
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 02
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 03
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 04
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 05
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 06
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{
                                    fontSize: '14px',
                                    marginBottom: '20px',
                                  }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 07
                                </li>
                              </a>
                            </div>
                            <div className="shop-section">
                              <h4>Other Shop Page</h4>
                              <a href="www.youtube.com" target="_blank">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Cart Page
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Checkout Page
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  My Account
                                </li>
                              </a>
                            </div>
                          </div>
                        </div>
                      </NavDropdown>
                    </div>

                    <div className="Shope-DropDown">
                      <NavDropdown
                        title={
                          <>
                            Elements
                            <MdKeyboardArrowDown
                              style={{ marginLeft: '4px' }}
                            />
                            <span></span>
                          </>
                        }
                        id="navbarScrollingDropdown"
                      >
                        <div className="dropdown-custom-container">
                          <div className="shop-row-wrapper">
                            <div className="shop-section">
                              <h4>Shop Page</h4>

                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 01
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 02
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 03
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 04
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 05
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Shop Page 06
                                </li>
                              </a>
                            </div>
                            <div className="shop-section">
                              <h4>Product Details Page</h4>
                              <a href="#" target="_blank">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 01
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 02
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 03
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 04
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 05
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{ fontSize: '14px' }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 06
                                </li>
                              </a>
                              <NavDropdown.Divider />
                              <a href="#">
                                <li
                                  style={{
                                    fontSize: '14px',
                                    marginBottom: '20px',
                                  }}
                                  className="dropdown-item"
                                >
                                  Product Details Page 07
                                </li>
                              </a>
                            </div>
                          </div>
                        </div>
                      </NavDropdown>
                    </div>

                    <div className="Blog-DropDown">
                      <NavDropdown
                        title={
                          <>
                            Blog
                            <MdKeyboardArrowDown
                              style={{ marginLeft: '4px' }}
                            />
                          </>
                        }
                        id="navbarScrollingDropdown"
                      >
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Blog 01
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Blog 02
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Blog 03
                          </li>
                        </a>

                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Blog 04
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Blog 05
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Blog Details 01
                          </li>
                        </a>
                        <NavDropdown.Divider />
                        <a href="#">
                          <li
                            style={{ fontSize: '14px' }}
                            className="dropdown-item"
                          >
                            Blog Details 02
                          </li>
                        </a>
                      </NavDropdown>
                    </div>

                    <div className="Contact-DropDown">
                      <a
                        href="#"
                        style={{ color: '#222222', fontWeight: '500' }}
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>

            <div className="Nav-icons d-flex gap-3">
              <div className="Nav-Search-icons Nav-icons-style ">
                <IoSearch />
              </div>
              <div className="Nav-Wishlist-icons Nav-icons-style">
                <FaRegHeart />
              </div>
              <div className="Nav-User-icons Nav-icons-style">
                <FaRegUser />
              </div>
              <div className="Nav-Cart-icons Nav-icons-style">
                <div className="Nav-cart">
                  <PiShoppingCart className="cart-icon" />
                  <div className="Nav-cart-count">
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        className="Offcanvas-main"
        show={showOffcanvas}
        onHide={handleOffcanvasClose}
        placement="end"
      >
        <Offcanvas.Header closeButton style={{ padding: '50px 25px 125px' }}>
          <Offcanvas.Title>
            <img src="/Images/logo-2.png" alt="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body style={{ backgroundColor: '#202020' }}>
          <Accordion className="Accordion-head" activeKey={activeAccordionKey}>
            {/* Home */}
            <Accordion.Item eventKey="home">
              <Accordion.Header onClick={() => toggleAccordion('home')}>
                Home
              </Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column ">
                  <Nav.Link href="#">Home Page 01</Nav.Link>
                  <Nav.Link href="#">Home Page 02</Nav.Link>
                  <Nav.Link href="#">Home Page 03</Nav.Link>
                  <Nav.Link href="#">Home Page 04</Nav.Link>
                  <Nav.Link href="#">Home Page 05</Nav.Link>
                  <Nav.Link href="#">Home RTL</Nav.Link>
                  <Nav.Link href="#">Home OnePage</Nav.Link>
                  <Nav.Link href="#">Header Style</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>

            {/* Pages */}
            <Accordion.Item eventKey="pages">
              <Accordion.Header onClick={() => toggleAccordion('pages')}>
                Pages
              </Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column">
                  <Nav.Link href="#" target="_blank">
                    About Us
                  </Nav.Link>
                  <Nav.Link href="#">Our Service</Nav.Link>
                  <Nav.Link href="#">Our Team</Nav.Link>
                  <Nav.Link href="#">Testimonials</Nav.Link>
                  <Nav.Link href="#">404</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="shop">
              <Accordion.Header onClick={() => toggleAccordion('shop')}>
                Shop
              </Accordion.Header>
              <Accordion.Body>
                <h6>Shop Page</h6>
                <Nav className="flex-column mb-3">
                  <Nav.Link href="#">Shop Page 01</Nav.Link>
                  <Nav.Link href="#">Shop Page 02</Nav.Link>
                  <Nav.Link href="#">Shop Page 03</Nav.Link>
                  <Nav.Link href="#">Shop Page 04</Nav.Link>
                  <Nav.Link href="#">Shop Page 05</Nav.Link>
                  <Nav.Link href="#">Shop Page 06</Nav.Link>
                </Nav>
                <h6>Product Details Page</h6>
                <Nav className="flex-column mb-3">
                  <Nav.Link href="#">Product Details Page 01</Nav.Link>
                  <Nav.Link href="#">Product Details Page 02</Nav.Link>
                  <Nav.Link href="#">Product Details Page 03</Nav.Link>
                  <Nav.Link href="#">Product Details Page 04</Nav.Link>
                  <Nav.Link href="#">Product Details Page 05</Nav.Link>
                  <Nav.Link href="#">Product Details Page 06</Nav.Link>
                  <Nav.Link href="#">Product Details Page 07</Nav.Link>
                </Nav>
                <h6>Other Shop Page</h6>
                <Nav className="flex-column">
                  <Nav.Link href="https://www.youtube.com" target="_blank">
                    Cart Page
                  </Nav.Link>
                  <Nav.Link href="#">Checkout Page</Nav.Link>
                  <Nav.Link href="#">My Account</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="elements">
              <Accordion.Header onClick={() => toggleAccordion('elements')}>
                Elements
              </Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column">
                  <Nav.Link href="https://www.youtube.com" target="_blank">
                    Cart Page
                  </Nav.Link>
                  <Nav.Link href="#">Checkout Page</Nav.Link>
                  <Nav.Link href="#">My Account</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="blog">
              <Accordion.Header onClick={() => toggleAccordion('blog')}>
                Blog
              </Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column">
                  <Nav.Link href="https://www.youtube.com" target="_blank">
                    adsf
                  </Nav.Link>
                  <Nav.Link href="#">German</Nav.Link>
                  <Nav.Link href="#">German</Nav.Link>
                  <Nav.Link href="#">German</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="contact">
              <Accordion.Header onClick={() => toggleAccordion('contact')}>
                Contact
              </Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column">
                  <Nav.Link href="https://www.youtube.com" target="_blank">
                    adsf
                  </Nav.Link>
                  <Nav.Link href="#">German</Nav.Link>
                  <Nav.Link href="#">German</Nav.Link>
                  <Nav.Link href="#">German</Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div class="p-3 text-white" style={{ textAlign: 'start' }}>
            <h5 class="mb-3">Contact Info</h5>
            <ul class="list-unstyled ps-2">
              <li class="mb-2">Chicago 12, Melbourne City, USA</li>
              <li class="mb-2"> +88 01682648101</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarSection;
