import React, { useRef, useState, useEffect } from "react";
import "./slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonial1 from "../../../assets/images/testimonial-1.png";
import testimonial2 from "../../../assets/images/testimonial-2.png";
import testimonial3 from "../../../assets/images/testimonial-3.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "./slider.css";
import seprator from "../../../assets/images/separator-1.png";
import { Container, Row, Col, Button } from "react-bootstrap";

const testimonials = [
    {
            text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.   ",
            author: "Natasha cox",
            position: "Co founder",
            avatar: testimonial1,
          },
          {
            text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.",
            author: "Martin mason",
            position: "Co founder",
            avatar: testimonial2,
          },
          {
            text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.",
            author: "Victoriya Simpson",
            position: "Co founder",
            avatar: testimonial3,
          },
          {
            text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.   ",
            author: "Natasha cox",
            position: "Co founder",
            avatar: testimonial1,
          }
];

const TestimonialSlider = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(testimonials.length - visibleCount, 0);

  const slideTo = (targetIndex) => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.offsetWidth / visibleCount;
      container.scrollTo({
        left: targetIndex * itemWidth,
        behavior: "smooth",
      });
    }
  };

  const slideNext = () => {
    const newIndex = index >= maxIndex ? 0 : index + 1;
    setIndex(newIndex);
    slideTo(newIndex);
  };

  const slidePrev = () => {
    const newIndex = index <= 0 ? maxIndex : index - 1;
    setIndex(newIndex);
    slideTo(newIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 5000);  

    return () => clearInterval(interval); 
  }, [index]);

  return (
    <Container className="slider-wrapper container mx-auto">
      <Row className="text-center">
        <Col>
          <h2 className="testhead">Testimonials</h2>
          <p>Excepteur sint occaecat cupidatat non proident sunt</p>
          <img src={seprator}  className="seprator" />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="slider-container" ref={containerRef}>
            <div className="slider-track">
              {testimonials.map((t, i) => (
                <div className="testimonial" key={i}>
                  <p className="text">"{t.text}"</p>
                  <div className="user-inf">
                    <div>
                      <p className="author">{t.author}</p>
                      <div className="position">{t.position}</div>
                    </div>
                      <div className="thumb">
                      <img src={t.avatar} alt={t.author} className="avatar" />
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="controls">
          <Button onClick={slidePrev} variant="" className="mx-2">
          <FaArrowLeftLong/>
          </Button>
          <Button onClick={slideNext} variant="" className="mx-2">
          <FaArrowRightLong/>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialSlider;




// const testimonials = [
//   {
//     text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.   ",
//     author: "Natasha cox",
//     position: "Co founder",
//     avatar: testimonial1,
//   },
//   {
//     text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.",
//     author: "Martin mason",
//     position: "Co founder",
//     avatar: testimonial2,
//   },
//   {
//     text: "Excepteur sint occaecat cup datat non proident sunt in culpa qui officia deser unt mollit anim labor um sed persp unde omnis iste.",
//     author: "Victoriya Simpson",
//     position: "Co founder",
//     avatar: testimonial3,
//   }
// ];

// const TestimonialSlider = () => {
//   const containerRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const visibleCount = 3;
//   const maxIndex = Math.max(testimonials.length - visibleCount, 0);

//   const slideTo = (targetIndex) => {
//     const container = containerRef.current;
//     if (container) {
//       const itemWidth = container.offsetWidth / visibleCount;
//       container.scrollTo({
//         left: targetIndex * itemWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   const slideNext = () => {
//     const newIndex = index >= maxIndex ? 0 : index + 1;
//     setIndex(newIndex);
//     slideTo(newIndex);
//   };

//   const slidePrev = () => {
//     const newIndex = index <= 0 ? maxIndex : index - 1;
//     setIndex(newIndex);
//     slideTo(newIndex);
//   };

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       slideNext(); 
//     }, 5000); 
//     return () => clearInterval(interval);  
//   }, [index]);

//   return (
//     <div className="slider-wrapper">
//       <h1 className="fw-semibold">Testimonials</h1>
//       <div className="slider-container" ref={containerRef}>
//         <div className="slider-track">
//           {testimonials.map((t, i) => (
//             <div className="testimonial" key={i}>
//               <p className="text"> {t.text}</p>
//               <div className="user-info">
//                 <div>
//                   <p className="author">{t.author}</p>
//                   <div className="position">{t.position}</div>
//                 </div>
//               </div>
//               <img src={t.avatar} alt={t.author} className="avatar" />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="controls">
//         <button onClick={slidePrev}><FaArrowLeftLong/></button>
//         <button onClick={slideNext}><FaArrowRightLong/></button>
//       </div>
//     </div>
//   );
// };
