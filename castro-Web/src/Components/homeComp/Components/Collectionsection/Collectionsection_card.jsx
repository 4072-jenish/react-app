import "./Collectionsection.css";
import React from "react";
import { FaHeart, FaSearch} from 'react-icons/fa';


function Collectionsection_card(props) {
    return (
        <>
            <div className="collectionsection_card d-flex flex-column justify-content-center align-items-start">
                <div className="collectionsection_card_img">
                    <img src={props.img} alt="" />
                    <div className="image-hover d-flex justify-content-center align-items-center gap-2 ">
                        <button className="icon d-flex justify-content-center align-items-center gap-2 fs-6 border-0"><FaHeart /></button>
                        <button className="btn-cart d-flex justify-content-center align-items-center gap-2 p-1 fs-6">Add to Cart</button>
                        <button className="icon icon d-flex justify-content-center align-items-center gap-2 fs-6 border-0"><FaSearch /></button>
                    </div>
                </div>
                <a href="#">{props.title}</a>
                <span>{props.price}</span>
            </div>
        </>
    )
}

export default Collectionsection_card