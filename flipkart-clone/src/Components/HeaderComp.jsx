import React from "react";
import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiAddCircleLine } from "react-icons/ri";
import logo from "../assets/Images/logo.svg"
import { Link } from "react-router";
const HeaderComp = () => {
    return(
        <>
            <header>
                         <div className="d-flex">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                                <nav>
                                    <ul className="d-flex">
                                         <Link><FaRegUserCircle /> Login<FaAngleDown /></Link>
                                         <Link><IoCartOutline /> Cart <FaAngleDown /></Link>
                                         <Link><RiAddCircleLine /> Add Product  <FaAngleDown /></Link>
                                    </ul>
                                </nav>
                         </div>
            </header>
        </>
    )
}

export default HeaderComp;