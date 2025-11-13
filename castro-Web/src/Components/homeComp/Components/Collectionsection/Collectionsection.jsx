import Container from 'react-bootstrap/Container';
import line from "../../../../assets/image/separator.png"
import React from "react"
import "./Collectionsection.css"
import { FiArrowUpRight } from 'react-icons/fi';
import Collectionsection_card from './Collectionsection_card';
import img1 from "../../../../assets/image/shop-1.jpg"
import img2 from "../../../../assets/image/shop-2.jpg"
import img3 from "../../../../assets/image/shop-3.jpg"
import img4 from "../../../../assets/image/shop-4.jpg"
import img5 from "../../../../assets/image/shop-5.jpg"
import img6 from "../../../../assets/image/shop-6.jpg"
import img7 from "../../../../assets/image/shop-7.jpg"
import img8 from "../../../../assets/image/shop-8.jpg"
import Commoncomp from '../Commoncomp/Commoncomp';

function Collectionsection(props) {
    return (
        <>
            <Container>
                <div className="Collection justify-content-center">
                    <div className="Collection_title text-center mb-5">
                        <Commoncomp title={"Our Top Collection"} text={"There are some product that we featured for choose your best"} img={line} />
                    </div>
                    <div className="Collection_product d-flex justify-content-center mb-3">
                        <div className="Collection_product_item d-flex gap-5">
                            <a href="#" className="text-center">Best Seller</a>
                            <a href="#" className="text-center">New Arrivals</a>
                            <a href="#" className="text-center">Top Rate</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img1} title="Cold Crewneck Sweater" price="$70.30" />
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img2} title="Multi-Way Ultra Crop Top" price="$50.00" />
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img3} title="Side-Tie Tank" price="$50.00" />
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img4} title="Cold Crewneck Sweater" price="$60.30" />
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img5} title="Side-Tie Tank" price="$35.30" />
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img6} title="Must-Have Easy Tank" price="$25.30" />
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img7} title="Woven Crop Cami" price="$90.30" />
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Collectionsection_card img={img8} title="Must-Have Easy Tank" price="$20.30" />
                        </div>
                    </div>
                    <div className="text-center mt-4 mb-4">
                        <button className="btnCollection btn-lg">
                            View All Products <FiArrowUpRight className="arrow-icon ms-2 fs-4" />
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Collectionsection;