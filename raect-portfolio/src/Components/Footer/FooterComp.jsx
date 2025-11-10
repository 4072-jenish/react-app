import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import './FooterComp.css'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-simple">
      <Container>
        <div className="footer-content-simple">
          {/* Social Links */}
          <div className="social-links-simple">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-simple"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-simple"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="social-link-simple"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="copyright-simple">
            © {currentYear} Jenish | Made with <FaHeart className="heart-icon" /> by Jenish
          </p>
        </div>
      </Container>
    </footer>
  );
};


export default Footer;
