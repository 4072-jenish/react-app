import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import test1 from "../../assets/image/testimonial-1.png";
import test2 from "../../assets/image/testimonial-2.png";
import test3 from "../../assets/image/testimonial-3.png";
import test4 from "../../assets/image/testimonial-4.png";
import seperator from "../../assets/image/line.png";

const testimonials = [
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deserunt mollit anim labor um sed persp unde omnis iste",
    name: "Natasha Cox",
    role: "Co Founder",
    img: test1,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deserunt mollit anim labor um sed persp unde omnis iste",
    name: "Martin Mason",
    role: "Co Founder",
    img: test2,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deserunt mollit anim labor um sed persp unde omnis iste",
    name: "Victoria Simpson",
    role: "Co Founder",
    img: test3,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deserunt mollit anim labor um sed persp unde omnis iste",
    name: "Natasha Cox",
    role: "Co Founder",
    img: test1,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deserunt mollit anim labor um sed persp unde omnis iste",
    name: "Martin Mason",
    role: "Co Founder",
    img: test2,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deserunt mollit anim labor um sed persp unde omnis iste",
    name: "Victoria Simpson",
    role: "Co Founder",
    img: test3,
  }
];

const testimonials1 = [
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.natus error voluptate accusant dolore mque laudantium totam aperiam.",
    name: "Natasha Cox",
    role: "Co Founder",
    img: test1,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.natus error voluptate accusant dolore mque laudantium totam aperiam.",
    name: "Martin Mason",
    role: "Co Founder",
    img: test2,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.natus error voluptate accusant dolore mque laudantium totam aperiam",
    name: "Natasha Cox",
    role: "Co Founder",
    img: test1,
  },
  {
    text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.natus error voluptate accusant dolore mque laudantium totam aperiam",
    name: "Martin Mason",
    role: "Co Founder",
    img: test2
  }
];
const renderCards = (cards) =>
  cards.map((testimonial, idx) => (
    <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
      <Card style={{ padding: "15px 15px 30px",  fontFamily: "Poppins ,sans-serif",color:"#848484"}}>
        <Card.Body>
          <Card.Text>{testimonial.text}</Card.Text>
          <Card.Title className="mb-2" style={{fontFamily:"'Josefin Sans', sans-serif" ,color:"#222"}}>{testimonial.name}</Card.Title>
          <Card.Subtitle className="mb-2 ">{testimonial.role}</Card.Subtitle>
        </Card.Body>
      </Card>
      <div className="text-center mt-3">
        <img src={testimonial.img} alt={testimonial.name} className="img-fluid" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
      </div>
    </Col>
  ));
  const renderCard = (card) =>
    card.map((testimonials1, idx) => (
      <Col key={idx} sm={12} lg={6} className="mb-4">
        <Card style={{ padding: "15px 15px 30px" ,fontFamily: "Poppins ,sans-serif",color:"#848484"}}>
          <Card.Body>
            <Card.Text>{testimonials1.text}</Card.Text>
            <Card.Title className="mb-2" style={{fontFamily:"'Josefin Sans', sans-serif",color:"#222222"}}>{testimonials1.name}</Card.Title>
            <Card.Subtitle className="mb-2">{testimonials1.role}</Card.Subtitle>
          </Card.Body>
        </Card>
        <div className="text-center mt-3">
          <img src={testimonials1.img} alt={testimonials1.name} className="img-fluid" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
        </div>
      </Col>
    ));
const TestComp = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  useEffect(() => {
    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize); 
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      <div className="TestimonialContainer text-center my-5">
        <h1 className="fw-bold">Testimonial</h1>
        <span className="text-secondary d-flex justify-content-center pt-0"><a href="#" className="nav-link">Home</a> <FaChevronRight className="pt-2 fs-5" /> Testimonial</span>
      </div>
      <div className="TestimonialText text-center my-5">
        <h1 className="fw-semibold mb-3">Testimonial Style 1</h1>
        <p>Excepteur sint occaecat cup datat non proident sunt</p>
        <img src={seperator} alt="line" style={{width:"141px", height:"15px"}}/>
      </div>
     <Carousel
        className="TestimonialCarousel py-5"interval={3000}controls={true}indicators={false}>
        {[0, 1].map((slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Container>
              <Row className="justify-content-center mx-auto">
              {
            window.innerWidth <= 576
              ? renderCards(testimonials.slice(slideIndex * 1, slideIndex * 1 + 1))
              : isSmallScreen
              ? renderCards(testimonials.slice(slideIndex * 2, slideIndex * 2 + 2))
              : renderCards(testimonials.slice(slideIndex * 3, slideIndex * 3 + 3))
          }
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container fluid className="bg-secondary-subtle py-5">
        <div className="text-center mb-4">
          <h2>Testimonial Style 2</h2>
          <img src={seperator} alt="seperator" className="my-3"  style={{width:"141px", height:"15px"}}/>
          <Carousel className="TestimonialCarousel py-5" interval={3000} controls={true} indicators={false}>
            {[0, 1].map((idx) => (
              <Carousel.Item key={idx}>
                <img src={test4} alt="test" />
                <p className="fs-6 w-75 mx-auto mt-3" style={{maxWidth:"720px",fontFamily:"'Poppins', sans-serif"}}>
                  Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deserunt mollit anim laborum sed perspiciatis unde     
                  omnis iste natus error voluptatem accusant dolore. mque laudantium totam aperiam eaque ipsa quae illo inventore veritatisquasi 
                  architectobeatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem.
                </p>
                <h5>Sebastian Bennett</h5>
                <span className="text-secondary" style={{fontFamily:"'Poppins', sans-serif"}}>Co Founder</span>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
     <div className="TestimonialText text-center my-5">
        <h1 className="fw-semibold mb-3">Testimonial Style 3</h1>
        <p>Excepteur sint occaecat cup datat non proident sunt</p>
        <img src={seperator} alt="line" style={{width:"141px", height:"15px"}}/>
      </div>
     <Carousel className="TestimonialCarousel py-5" interval={3000} controls={true} indicators={false} >
        {[0, 1].map((slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Container>
            <Row className="justify-content-center mx-auto">
                {isSmallScreen
                  ? renderCard(testimonials1.slice(slideIndex * 1, slideIndex * 1 + 1))
                  : renderCard(testimonials1.slice(slideIndex * 2, slideIndex * 2 + 2))
                }
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default TestComp;
