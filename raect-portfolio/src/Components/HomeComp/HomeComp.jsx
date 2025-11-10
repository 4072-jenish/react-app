import React, { useEffect, useRef, useState } from "react";
import AboutComp from "../AboutComp/AboutComp";
import Projects from "../Projects/Projectcomp";
import Skills from "../Skills/SkillCom";
import ContactComp from "../ContactComp/ContactComp";
import Faq from "../FAQComp/FAQComp";
import "./homeComp.css";
import { TypeAnimation } from 'react-type-animation';
import ScrollFade from "../ScrollFade"; 

const HomeComp = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="modern-hero">
      {/* Progress Bar */}
      <div className="scroll-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="hero-main">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <div className="content-wrapper">
                {/* Welcome Badge */}
                <div className="welcome-badge">
                  <div className="pulse-dot"></div>
                  Welcome to my digital space
                </div>

                {/* Main Heading */}
                <h1 className="hero-heading">
                  <span className="gradient-text">Crafting Digital</span>
                  <br />
                  <span className="typing-container">
                    <TypeAnimation
                      sequence={[
                        'Experiences',
                        2000,
                        'Solutions',
                        2000,
                        'Innovations',
                        2000,
                        'Dreams',
                        2000,
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="type-main"
                    />
                  </span>
                </h1>

                {/* Description */}
                <p className="hero-description">
                  I'm <strong>JENISH</strong>, a passionate MERN Stack Developer 
                  dedicated to building <span className="highlight">scalable applications</span> 
                  and <span className="highlight">beautiful interfaces</span> that make a difference.
                </p>

                {/* Quick Stats */}
                <div className="quick-stats">
                  <div className="stat">
                    <div className="stat-number">3+</div>
                    <div className="stat-text">Years Experience</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-text">Projects Completed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">100%</div>
                    <div className="stat-text">Client Satisfaction</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="hero-actions">
                  <button className="cta-btn primary">
                    <span>View My Work</span>
                    <div className="btn-icon">🚀</div>
                  </button>
                  <button className="cta-btn secondary">
                    <span>Let's Talk</span>
                    <div className="btn-icon">💬</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero-visual">
              <div className="visual-container">
                {/* Animated Card Stack */}
                <div className="card-stack">
                  <div className="card card-1">
                    <div className="card-content">
                      <div className="card-icon">⚛️</div>
                      <h4>Frontend</h4>
                      <p>React & Modern JS</p>
                    </div>
                  </div>
                  <div className="card card-2">
                    <div className="card-content">
                      <div className="card-icon">🟢</div>
                      <h4>Backend</h4>
                      <p>Node.js & Express</p>
                    </div>
                  </div>
                  <div className="card card-3">
                    <div className="card-content">
                      <div className="card-icon">🍃</div>
                      <h4>Database</h4>
                      <p>MongoDB & Mongoose</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                  <div className="element element-1">{`</>`}</div>
                  <div className="element element-2">{`{}`}</div>
                  <div className="element element-3">CSS</div>
                  <div className="element element-4">API</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore more</div>
        <div className="scroll-arrow">↓</div>
      </div>

      {/* Rest of your components flow naturally below */}
      <div className="content-flow">
        <AboutComp />
        <Skills />
        <Projects />
        <Faq />
        <ContactComp />
      </div>
    </div>
  );
};


export default HomeComp;
