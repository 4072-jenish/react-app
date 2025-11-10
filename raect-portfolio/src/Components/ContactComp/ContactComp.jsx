import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./ContactComp.css";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { ZIndex } from "tsparticles-engine";
import index from "toastify";
import { FaClock, FaComment, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaUser } from "react-icons/fa";


const ContactComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Kamrej, Surat, Gujarat",
      value: "India",
      description: "Based in Gujarat"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "hariyanijenish@gmail.com",
      description: "Send me a message"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 99093 86875",
      description: "Mon - Fri, 9AM - 6PM"
    },
    {
      icon: <FaClock />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually faster"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("🎉 Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        className="zIn"
      />

      {/* Animated Background */}
      <div className="contact-bg">
        <div className="floating-message">💬</div>
        <div className="floating-message">📧</div>
        <div className="floating-message">📱</div>
        <div className="floating-message">🚀</div>
      </div>

      <Container>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <Row className="contact-content">
          {/* Contact Information */}
          <Col lg={4} className="mb-5">
            <div className={`contact-info ${animated ? 'visible' : ''}`}>
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-description">
                I'm always open to discussing new opportunities, creative ideas, 
                or opportunities to be part of your vision.
              </p>

              <div className="info-items">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="info-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="info-icon">
                      {item.icon}
                    </div>
                    <div className="info-content">
                      <h4 className="info-item-title">{item.title}</h4>
                      <p className="info-item-value">{item.value}</p>
                      <p className="info-item-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-links">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <span>📱</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>💼</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>🐙</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>🐦</span>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <div className={`contact-form-wrapper ${animated ? 'visible' : ''}`}>
              <Form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="form-group" controlId="formName">
                      <div className="input-wrapper">
                        <FaUser className="input-icon" />
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                        <div className="input-underline"></div>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="form-group" controlId="formEmail">
                      <div className="input-wrapper">
                        <FaEnvelope className="input-icon" />
                        <Form.Control
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                        <div className="input-underline"></div>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="form-group" controlId="formMessage">
                  <div className="input-wrapper">
                    <FaComment className="input-icon" />
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Your Message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input textarea"
                    />
                    <div className="input-underline"></div>
                  </div>
                </Form.Group>

                <div className="form-actions">
                  <Button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        Send Message
                        <div className="btn-glow"></div>
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Quick Contact CTA */}
        <div className={`quick-contact ${animated ? 'visible' : ''}`}>
          <div className="quick-contact-content">
            <h3 className="quick-title">Prefer a quicker way to connect?</h3>
            <p className="quick-text">
              Send me an email directly or connect with me on social media.
            </p>
            <div className="quick-buttons">
              <button className="quick-btn email">
                <span>📧 Send Email</span>
              </button>
              <button className="quick-btn linkedin">
                <span>💼 Connect on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


export default ContactComp;
