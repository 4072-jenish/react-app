import logo2 from "../../assets/image/logo-2.png"
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card1 from '../../assets/image/card-1.png';
import Card2 from '../../assets/image/card-2.png';
import Card3 from '../../assets/image/card-3.png';
import Card4 from '../../assets/image/card-4.png';

import { IoLogoGoogleplus } from "react-icons/io";
import { FaVimeoV } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";``
import { FaTwitter } from "react-icons/fa";
import './footer.css'

const Footer  = () => {

    return ( 
        <>
        <div className="footer">
        <Container className=" d-flex justify-content-between  align-items-start gap-3 flex-wrap">
        < ul><li><img src={logo2}  style={{width: "120px"}}alt="" /></li></ul>

        <ul className="list-unstyled ">
            <h2   style={{fontFamily : "Josefin Sans"}}>Category</h2>
            <li><a href="" className="underline-hover">Man</a></li>
            <li><a href="" className="underline-hover">Woman</a></li>
            <li><a href="" className="underline-hover">Kids</a></li>
            <li><a href="" className="underline-hover">Accessories</a></li>
            <li><a href="" className="underline-hover">Shoe</a></li>
        </ul>
        <ul  className="list-unstyled">
            <h2   style={{fontFamily : "Josefin Sans"}}>Useful Link</h2>
            <li><a href="" className="underline-hover">News & Tips</a></li>
            <li><a href="" className="underline-hover">About Us</a></li>
            <li><a href="" className="underline-hover">Terms & Condiations</a></li>
            <li><a href="" className="underline-hover">Our Shop</a></li>
            <li><a href="" className="underline-hover">Contact Us </a></li>
        </ul>
        <ul  className="list-unstyled">
            <h2   style={{fontFamily : "Josefin Sans"}}>Contact</h2>
            <li className="d-flex"> 
                 <IoLocationOutline style={{fontSize : "40px" , color : "#848484"}} className="me-2 "/> 
                  <p > 4708 Ruecker Wall, <br/> Kassandratown, HI</p>
           </li>
           <li><TbPhoneCall  style={{fontSize : "30px" , color : "#848484"}} className="me-2 "/><a href=""> ‪+2(305) 587-3407‬</a></li>
            <li><MdOutlineMailOutline style={{fontSize : "30px" , color : "#848484"}} className="me-2 " /><a href="">info@example.com</a></li>
           
        </ul>
        <ul  className="list-unstyled" style={{fontFamily : "Josefin Sans"}}>
            <h2>Newsletter</h2>
            <p>4708 Ruecker Wall, <br/>Kassandratown, HI 97729</p>
            <input type="text" style={{display: "block"}}  className="mb-2" placeholder="Enter your email" />
             <button className="door-hover">Subscribe</button>
        </ul>

        </Container>
        </div>
        <hr className="m-0" />

        <div className="copy-right" style={{backgroundColor: "#141414"}}>
            <Container style={{padding: "24px 0px "}} className="d-flex justify-content-between footer-end">
                 <ul className="list-unstyled d-flex gap-3 align-items-center mb-0">
                    <li><img src={Card1} alt="" width={"50px"} /></li>
                    <li><img src={Card2} alt="" width={"50px"} /></li>
                    <li><img src={Card3} alt="" width={"50px"} /></li>
                    <li><img src={Card4} alt="" width={"50px"} /></li>
                 </ul>

                <div className="right-side">    
               <div className="icons-info">
                  <FaFacebookF className='icons me-4' />
                  <FaTwitter className='icons me-4' />
                  <FaVimeoV className='icons me-4' />
                  <IoLogoGoogleplus className='icons' />
               </div>
               <div className="copy-message pt-2">
                <p style={{color: "#848484"}} className="mb-0"> <a href="" className="text-decoration-none" style={{color: "#848484"}}>Castro</a> © 2020 All Right Reserved</p>
               </div>
                </div>
            </Container>
        </div>
        
        </>
    )

}
export default Footer
