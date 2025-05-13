import  "./Header.css";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/images/logo.png"
import logo2 from "../../assets/images/logo-2.png"

import Accordion from 'react-bootstrap/Accordion';
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { MdKeyboardArrowDown } from "react-icons/md";






const Header = () => {

    return (
        <>
    {[false, ].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container  className="header">
            <div className="logo">
                <img src={logo} alt="" width={"140px"}/>
            </div>


            <ul className="list-unstyled d-flex gap-5 justify-content-between align-items-center m-0 navbar" >
                <li>
                <NavDropdown title= {
                  <>
                  Home 
                  <MdKeyboardArrowDown  style={{marginLeft: "2px",  fontSize: "20px"}} />
                  </>
                }id="collapsible-nav-dropdown" >

              <NavDropdown.Item href="#action/3.3">Home Page 01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Home Page 02</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Home Page 03</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Home Page 04</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Home Page 05</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Home RTL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Home OnePage</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Header Style</NavDropdown.Item>
            </NavDropdown>
                </li>
                <li>
                <NavDropdown title= {
                  <>
                  Page 
                  <MdKeyboardArrowDown  style={{marginLeft: "2px",  fontSize: "20px"}} />
                  </>} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Our Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Testimonials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">404</NavDropdown.Item>
             
            </NavDropdown>
                </li>
                <li>
                <NavDropdown title= {
                  <>
                  Shop
                  <MdKeyboardArrowDown  style={{marginLeft: "2px",  fontSize: "20px"}} />
                  </>}  id="collapsible-nav-dropdown">
                  <div className="shop_page d-flex justify-content-between gap-5 align-item-center" style={{width: "1050px"}}>
                      <ul className="list-unstyled w-50">
                        <h3 className="pb-4" style={{fontFamily : "Josefin Sans"}}>Shop Page</h3>
                        <li><NavDropdown.Item href="#action/3.3">Shop Page 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Page 02</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Page 03</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Page 04</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Page 05</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Page 06</NavDropdown.Item></li>
                      </ul>
                      <ul className="list-unstyled w-50">
                        <h3 className="pb-4" style={{fontFamily : "Josefin Sans"}}>Product Details Page</h3>
                        <li><NavDropdown.Item href="#action/3.3">Shop Details 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Details 02</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Details 03</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Details 04</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Details 05</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Details 06</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop Details 07</NavDropdown.Item></li>
                      </ul>
                      <ul className="list-unstyled w-50">
                        <h3 className="pb-4" style={{fontFamily : "Josefin Sans"}}>Other Shop Page</h3>
                        <li><NavDropdown.Item href="#action/3.3">cart Page</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Checkout Page</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">My Account</NavDropdown.Item></li>
                      </ul>
                    </div>
 
            </NavDropdown>
                </li>
                <li>
                <NavDropdown title= {
                  <>
                  Elements
                  <MdKeyboardArrowDown  style={{marginLeft: "2px",  fontSize: "20px"}} />
                  </>}  id="collapsible-nav-dropdown">
                  <div className="shop_page d-flex  gap-5 justify-content-between align-item-center" style={{width: "900px" }}>
                      <ul className="list-unstyled w-50">
                        <h3 className="pb-4 " style={{fontFamily : "Josefin Sans"}}>Elements 1</h3>
                        <li><NavDropdown.Item href="#action/3.3">Category 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Category 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Category 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Category 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop 02</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop 03</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Shop 04</NavDropdown.Item></li>
                      </ul>
                      <ul className="list-unstyled w-50">
                        <h3 className="pb-4" style={{fontFamily : "Josefin Sans"}}>Elements 2</h3>
                        <li><NavDropdown.Item href="#action/3.3">News 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">News 02</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Service 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Service 02</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Team 01</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Team 02</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item></li>
                        <NavDropdown.Divider />
                        <li><NavDropdown.Item href="#action/3.3">Clients</NavDropdown.Item></li>
                      </ul>
                    </div>
               </NavDropdown>
                </li>
                <li>
                <NavDropdown title= {
                  <>
                  Blog
                  <MdKeyboardArrowDown  style={{marginLeft: "2px",  fontSize: "20px"}} />
                  </>}  id="collapsible-nav-dropdown" >
                <NavDropdown.Item href="#action/3.3">Blog 01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Blog 02</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Blog 03</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Blog 04</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Blog 05</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Blog Details 01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Blog Details 02</NavDropdown.Item>
        
            </NavDropdown>
                </li>
                <li> <NavDropdown.Item href="#action/3.3" id="collapsible-nav-dropdown">Contact</NavDropdown.Item></li>
            </ul>
         
            <Navbar.Toggle className=" toggle-btn" aria-controls={`offcanvasNavbar-expand-${expand}`} />


            <ul className="list-unstyled d-flex gap-4 header-icons align-items-center m-0">
                <li className="header-icon"><IoSearch /></li>
                <li className="header-icon"><FaRegHeart /></li>
                <li className="header-icon"><FaRegUser /></li>
                <li className="header-icon"> <BsCart3 /></li>
                <span className="round">3</span>
            </ul>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo2}  alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Home</Accordion.Header>
        <Accordion.Body>
          Home Page 01     
        </Accordion.Body>
        <Accordion.Body>
          Home Page 02     
        </Accordion.Body>
        <Accordion.Body>
          Home Page 03     
        </Accordion.Body>
        <Accordion.Body>
          Home Page 04     
        </Accordion.Body>
        <Accordion.Body>
          Home Page 05     
        </Accordion.Body>
        <Accordion.Body>
          Home RTL   
        </Accordion.Body>
        <Accordion.Body>
          Home OnePage   
        </Accordion.Body>
        <Accordion.Body>
          Home Style 
        </Accordion.Body>
      </Accordion.Item>
               </Accordion>
              <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Page</Accordion.Header>
        <Accordion.Body>
          About  
        </Accordion.Body>
        <Accordion.Body>
          Our Services   
        </Accordion.Body>
        <Accordion.Body>
          Our Team     
        </Accordion.Body>
        <Accordion.Body>
          Testimonial 
        </Accordion.Body>
        <Accordion.Body>
          404
        </Accordion.Body>
      </Accordion.Item>
               </Accordion>
              <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Shop</Accordion.Header>
        <Accordion.Body>
          Shop Page 01     
        </Accordion.Body>
        <Accordion.Body>
          Shop Page 02     
        </Accordion.Body>
        <Accordion.Body>
          Shop Page 03     
        </Accordion.Body>
        <Accordion.Body>
          Shop Page 04     
        </Accordion.Body>
        <Accordion.Body>
          Shop Page 05     
        </Accordion.Body>
        <Accordion.Body>
          Shop Page 06
        </Accordion.Body>
        <Accordion.Body>
          Product Details 01  
        </Accordion.Body>
        <Accordion.Body>
          Product Details 02  
        </Accordion.Body>
        <Accordion.Body>
          Product Details 03  
        </Accordion.Body>
        <Accordion.Body>
          Product Details 04  
        </Accordion.Body>
        <Accordion.Body>
          Product Details 05  
        </Accordion.Body>
        <Accordion.Body>
          Product Details 06 
        </Accordion.Body>
        <Accordion.Body>
          Product Details 07  
        </Accordion.Body>
        <Accordion.Body>
          Cart Page
        </Accordion.Body>
        <Accordion.Body>
          Checkout Page
        </Accordion.Body>
        <Accordion.Body>
           My Account
        </Accordion.Body>
      </Accordion.Item>
               </Accordion>
              <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Elements</Accordion.Header>
        <Accordion.Body>
          Category 01    
        </Accordion.Body>
        <Accordion.Body>
          Category 02    
        </Accordion.Body>
        <Accordion.Body>
          Category 03    
        </Accordion.Body>
        <Accordion.Body>
          Category 04    
        </Accordion.Body>
        <Accordion.Body>
          Shop 01 
        </Accordion.Body>
        <Accordion.Body>
          Shop 02 
        </Accordion.Body>
        <Accordion.Body>
          Shop 03 
        </Accordion.Body>
        <Accordion.Body>
          Shop 04 
        </Accordion.Body>
        <Accordion.Body>
          News 01   
        </Accordion.Body>
        <Accordion.Body>
          News 02   
        </Accordion.Body>
        <Accordion.Body>
          Service 01  
        </Accordion.Body>
        <Accordion.Body>
          Service 02  
        </Accordion.Body>
        <Accordion.Body>
          Team 01
        </Accordion.Body>
        <Accordion.Body>
          Team 02
        </Accordion.Body>
        <Accordion.Body>
          Instragram  
        </Accordion.Body>
        <Accordion.Body>
          Clients
        </Accordion.Body>
      </Accordion.Item>
               </Accordion>
              <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Blog</Accordion.Header>
        <Accordion.Body>
          Blog 01     
        </Accordion.Body>
        <Accordion.Body>
          Blog 02     
        </Accordion.Body>
        <Accordion.Body>
          Blog 03     
        </Accordion.Body>
        <Accordion.Body>
          Blog 04     
        </Accordion.Body>
        <Accordion.Body>
          Blog 05     
        </Accordion.Body>
        <Accordion.Body>
          Blog Details 01     
        </Accordion.Body>
        <Accordion.Body>
          Blog Details 02     
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Header>Contact</Accordion.Header>
      
               </Accordion>
               <ul className="list-unstyled d-flex gap-4 header-icons align-items-center ms-4 mt-4" >
                <li className="header-icon" style={{color : "#fff"}}><IoSearch /></li>
                <li className="header-icon" style={{color : "#fff"}}><FaRegHeart /></li>
                <li className="header-icon" style={{color : "#fff"}}><FaRegUser /></li>
                <li className="header-icon" style={{color : "#fff"}}> <BsCart3 /></li>
            </ul>

            <ul className=" Acco-list list-unstyled ms-4">
            <h2>Contact Info</h2>
            <li>Chicago 12, Melborne City, USA </li>
           <li><a href="javascript:void(0)"> +88 01682648101</a></li>
            <li><a href="javascript:void(0)">info@example.com</a></li>
           
        </ul>


          <ul className="icon-list list-unstyled  d-flex  align-items-center ms-4 gap-4">
            <li><a href="javascript:void(0)" className="text-decoration-none text-white"><FaTwitter style={{fontSize: "20px"}} /></a></li>
            <li><a href="javascript:void(0)" className="text-decoration-none text-white"><IoLogoFacebook  style={{fontSize: "20px"}} /></a></li>
            <li><a href="javascript:void(0)" className="text-decoration-none text-white"><FaPinterestP style={{fontSize: "20px"}} /></a></li>
            <li><a href="javascript:void(0)" className="text-decoration-none text-white"><FaInstagram style={{fontSize: "20px"}} /></a></li>
            <li><a href="javascript:void(0)" className="text-decoration-none text-white"><FaYoutube style={{fontSize: "20px"}} /></a></li>
          </ul>


              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    
        </>
    )
}
export default Header;