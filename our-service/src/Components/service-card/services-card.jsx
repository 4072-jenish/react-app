import React from "react";

import "./services-card.css";
import { CgArrowTopRight } from "react-icons/cg";
 
const ServicesCard = (props) => {

  return(
    <>
        <div className="container">
           <div className="card-servce d-flex justify-content-center align-items-center gap-5" style={{marginTop: "100px"}} >
           <div className="card-image">
              <div className="col-6 w-100 col-sm-12">
              <img src={props.image}/>
              </div>
           </div>
           <div className="card-content ps-5">
            <div className="col-6 ps-2 col-sm-12">
              <h1 className="mb-4">{props.title}</h1>
              <p className="pb-3">{props.description}</p>
              <button className="btn-hover fw-semibold">View Catalog  <CgArrowTopRight/></button>
            </div>
           </div>
           </div>
        </div>
    </>
  );
}


export default ServicesCard;



