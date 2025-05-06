import React from "react";

import "./services-card.css";
import { CgArrowTopRight } from "react-icons/cg";
 
const ServicesCard = (props) => {

  return(
    <>
        <div className="container">
           <div className="card-servce  d-flex justify-content-between align-items-center flex-wrap" style={{marginTop: "100px"}} >
              <div className=" card-image col-lg-6 col-md-7 col-sm-8 col-12 shine-hover">
                <img src={props.image} alt="service" className="image-fluid" />
              </div>
            <div className="card-content col-lg-6 col-md-5 col-sm-4 col-12 ps-sm-5 pt-2">
              <h1 className="mb-4">{props.title}</h1>
              <p className="pb-3">{props.description}</p>
              <button className="btn-hover fw-semibold">View Catalog  <CgArrowTopRight/></button>
            </div>
           </div>
        </div>
    </>
  );
}


export default ServicesCard;



