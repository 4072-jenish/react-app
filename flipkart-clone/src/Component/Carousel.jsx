import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel className="mb-4">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/ff79341b24d091cd.jpg?q=60"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1558a721300c7f6d.jpg?q=60"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60"
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1221d5443fd3875e.jpeg?q=80"
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1bd9f11edbf77427.jpg?q=80"
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1fd821ae6c27fb56.jpg?q=80"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
