import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import "./sale-comp.css";
import shape2 from "../../../assets/images/shape-2.jpg";
import shape3 from "../../../assets/images/shape-3.jpg";


const SaleComp = () => {
    return(
        <>
        <div className="sale-tag ">
        <div className="sale-bg">
             <div className="container">
                <div className="col-12">
                    <div className="sale-container">
                        <div className="sale-content">
                          <img src={shape2} className="shape-1 d-md-block d-none "/>
                          <img src={shape3} className="shape-2 d-md-block d-none"/>
                          <h1>End of Season Clearance Sale upto 50%</h1>
                          <p>Welcome to the new range of shaving products from master barber. We have over three decades of experience in the male grooming industry</p>
                          <button className="btn-hoverr">Shop Now <CgArrowTopRight/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       </>
    );
}

export default SaleComp;