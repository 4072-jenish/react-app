import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannerimg1 from '../../../../assets/image/banner-image-1.png';
import bannerimg2 from '../../../../assets/image/banner-image-2.png';
import bannerimg3 from '../../../../assets/image/banner-image-3.png';
import './Bannersection.css';
import { FiArrowUpRight } from 'react-icons/fi';

function Bannersection() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="banner-section">
                <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
                    <Carousel.Item>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <Carousel.Caption className="text-left p-0">
                                        <h3>Up To <br /><span className="discount">50% </span>Discount</h3>
                                        <h4>Summer Lookbook - 2020</h4>
                                        <p>New Modern Stylist Fashionable Men's Wear Jeans Shirt.</p>
                                        <button className="sliderbtn">Explore Now <FiArrowUpRight className="arrow-icon ms-2 fs-4" /></button>
                                        <div className="slide">
                                            <span className="active">01</span> / <span>02</span> / <span>03</span>
                                        </div>
                                    </Carousel.Caption>
                                </div>
                                <div className="col-md-7">
                                    <img src={bannerimg1} alt="First slide" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <Carousel.Caption className="text-left p-0">
                                        <h3>Up To <br /><span className="discount">50% </span>Discount</h3>
                                        <h4>Winter Collection - 2020</h4>
                                        <p className="lead">Warm and Stylish Winter Wear for Men.</p>
                                        <button className="sliderbtn">Explore Now <FiArrowUpRight className="arrow-icon ms-2 fs-4" /></button>
                                        <div className="slide-indicators">
                                            <span>01</span> / <span className="active">02</span> / <span>03</span>
                                        </div>
                                    </Carousel.Caption>
                                </div>
                                <div className="col-md-7">
                                    <img src={bannerimg2} alt="Second slide" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <Carousel.Caption className="text-left p-0">
                                        <h3>Up To <br /><span className="discount">50% </span>Discount</h3>
                                        <h4>Spring Collection - 2020</h4>
                                        <p className="lead">Fresh and Light Spring Fashion for Men.</p>
                                        <button className="sliderbtn">Explore Now <FiArrowUpRight className="arrow-icon ms-2 fs-4" /></button>
                                        <div className="slide-indicators">
                                            <span>01</span> / <span>02</span> / <span className="active">03</span>
                                        </div>
                                    </Carousel.Caption>
                                </div>
                                <div className="col-md-7">
                                    <img src={bannerimg3} alt="Third slide" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Bannersection;