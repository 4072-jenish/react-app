
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./service-head.css"


const Head = () => {
    return(
        <>
        <div className="service-head mx-auto text-center">
            <h1>Our Services</h1>
           <div className="text d-flex align-items-center d-inline-block text-center justify-content-center">
           <a href="#">Home</a><MdOutlineKeyboardArrowRight className="m-0" />
           <p className="m-0">Services</p>
           </div>
        </div>
        </>
    );
}

export default Head;