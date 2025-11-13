import React from 'react';
import { CgArrowTopRight } from "react-icons/cg";
import '../Shopnow/Shopnow.css'
import Container from 'react-bootstrap/Container';
import shape2 from '../../../../assets/image/shape-2.png'
import shape3 from '../../../../assets/image/shape-3.png'

const Shopnow = () => {
    return (
        <>
            <div className="Shopnow">
                <Container >
                    <div className="Shopnow_content">
                        <div className="col-12">
                            <img src={shape3} className="shape-2 d-sm-block" />
                            <img src={shape2} className="shape-1 d-sm-block" />
                            <h1>End of Season Clearance Sale upto 50%</h1>
                            <p>Welcome to the new range of shaving products from master barber. We have over three decades of experience in the male grooming industry </p>
                            <button className="shopbtn boder-none py-3 px-5">Shop Now <CgArrowTopRight /></button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Shopnow;