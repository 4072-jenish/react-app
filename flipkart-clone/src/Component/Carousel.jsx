import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel className="mb-4">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a10f38d4c35f39f9.jpg?q=20"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8804506b4b12d911.jpg?q=20"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f1c67cf9d0a4bdf7.jpg?q=20"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
