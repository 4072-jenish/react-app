import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import "./FAQComp.css";
const Faq = () => {
  return (
    <div className="faq-section">
      <Container className="faq-wrapper">
        <h2 className="faq-title text-center mb-5">
          <FaQuestionCircle className="me-2 text-primary blueColor" />
          Frequently Asked Questions
        </h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What technologies do you specialize in?</Accordion.Header>
            <Accordion.Body>
              I specialize in frontend technologies like HTML, CSS, Bootstrap, and React, and also have experience with jQuery and Firebase. My React projects involve component-based architecture, state management, and integration with real APIs and Firebase Authentication. I also work with Cloudinary for media uploads and follow modern development practices such as responsive design, reusable components, and accessibility.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Are you available for freelance or collaboration work?</Accordion.Header>
            <Accordion.Body>
              Yes, I am always open to exciting opportunities—whether it's freelance gigs, internships, or long-term collaborations. I enjoy working in teams and can adapt to new environments quickly. You can reach out through my Contact page, and I will respond as soon as possible with availability, timelines, and how we can work together.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What kind of team experience do you have?</Accordion.Header>
            <Accordion.Body>
              I’ve been involved in multiple team-based projects, including a full-fledged e-commerce platform developed using React, Redux, and Firebase. In these projects, I took on responsibilities like component development, authentication, Cloudinary integration, and code optimization. I understand the importance of Git workflows, version control, and good communication for successful teamwork.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I view or download your resume?</Accordion.Header>
            <Accordion.Body>
              Yes, my resume is available on the About or Resume page. It includes detailed information about my technical skills, education, and real-world project experience. You can either view it directly or download it as a PDF. If you'd prefer a version tailored for a specific job role, feel free to contact me, and I can provide one.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Do you write blogs or contribute to open source?</Accordion.Header>
            <Accordion.Body>
              I'm starting to explore technical writing and plan to post blogs on React fundamentals, Firebase integration, and project walkthroughs soon. I also look forward to contributing to open-source projects as I grow my experience. Stay tuned through my GitHub or connect with me for collaborations.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
