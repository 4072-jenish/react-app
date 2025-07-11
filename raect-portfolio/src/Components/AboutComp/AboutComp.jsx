import './AboutComp.css';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/images/myImg.png";

const AboutComp = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="text-center mb-5">About Me</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="about-text">
              Hello! I'm <strong>Jenish</strong>, a passionate and dedicated{"Red and White Multimedia Aducation"}
              <strong>MERN Stack Developer</strong> based in India.
              <br />
              <br />
              I specialize in building dynamic and responsive web applications
              using <strong>React</strong>, <strong>Bootstrap</strong>, and{" "}
              <strong>Firebase</strong>. I love solving problems with clean code
              and user-centric design. I’ve worked on team-based and individual
              projects ranging from simple static websites to full e-commerce
              apps.
              <br />
              <br />
              My journey in tech started with C++ and grew through hands-on
              experience with HTML, CSS, JavaScript, and modern frameworks.
              Every project sharpens my skills and pushes me to learn more.
            </p>
          </Col>

          <Col md={6}>
          <img src={myImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutComp;

