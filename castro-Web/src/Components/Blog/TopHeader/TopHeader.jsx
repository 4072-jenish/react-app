
import "./TopHeader.css";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaVimeoV } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import flag from "../../assets/images/icon-lang.png";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdKeyboardArrowDown } from "react-icons/md";




function TextLinkExample() {
   return (
      <Container>
         <div className="topHeader d-flex ">
            <div className="left-info">
               <ul className='list-unstyled d-flex gap-4 m-0  flex-wrap'>
                  <li>
                     <MdOutlineMailOutline />
                     <a href="" className='text-decoration-none ps-2'>support@example.com</a>
                  </li>
                  <li>
                     <TfiWorld />
                     <span className='ps-2'>Kleine Pierbard 8-6 2249 KV Vries </span>
                  </li> 
               </ul>

            </div>
            <div className="right-info d-flex gap-4 flex-wrap" >
               <div className="icons-info">
                  <FaFacebookF className='icons me-4' />
                  <FaTwitter className='icons me-4' />
                  <FaVimeoV className='icons me-4' />
                  <IoLogoGoogleplus className='icons' />
               </div>

               <span className="line"></span>

               <div className="language-info d-flex justify-content-between">
                  <div className="english-info pe-3 d-flex" >
                     <span><img src={flag} alt="Flag" width={"16px"} className='me-2' /></span>
                     <NavDropdown  title= {
                  <>
                  English
                  <MdKeyboardArrowDown  style={{marginLeft: "2px",  fontSize: "20px"}} />
                  </>} id="collapsible-nav-dropdown">

                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black">German</a>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black"> Italion</a>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black"> Chinese</a>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black">Russian</a>
                        </NavDropdown.Item>
                     </NavDropdown>
                  </div>


                  <div className="USD-info ps-2">
                     <NavDropdown  title= {
                  <>
                  USD
                  <MdKeyboardArrowDown  style={{marginLeft: "2px",  fontSize: "20px"}} />
                  </>} id="collapsible-nav-dropdown">

                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black">USD</a>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black"> UR</a>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black"> URO</a>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           <a href="" className="text-decoration-none text-black">Spanish</a>
                        </NavDropdown.Item>
                     </NavDropdown>
                  </div>

               </div>

            </div>
         </div>
      </Container>
   );
}

export default TextLinkExample;