import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './FooterComp.css'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4">
      <Container className="text-center">
        <div className="mb-2">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="footer-icon"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-0 text-muted">
          © {new Date().getFullYear()} Jenish | Fullstack Developer
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
