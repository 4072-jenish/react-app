import './AboutComp.css';
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/images/myImg.png";

const AboutComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    // Animated background pattern
    const drawAnimatedBackground = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid
      ctx.strokeStyle = 'rgba(102, 126, 234, 0.1)';
      ctx.lineWidth = 1;

      const time = Date.now() * 0.001;
      const offsetX = Math.sin(time) * 20;
      const offsetY = Math.cos(time) * 20;

      for (let x = 0; x < canvas.width; x += 30) {
        for (let y = 0; y < canvas.height; y += 30) {
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      requestAnimationFrame(drawAnimatedBackground);
    };

    drawAnimatedBackground();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="about-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <Container>
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Get to know the developer behind the code
          </p>
        </div>

        <Row className="align-items-center about-content">
          <Col lg={6}>
            <div className={`about-text-wrapper ${isVisible ? 'visible' : ''}`}>
              {/* Introduction Card */}
              <div className="intro-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="card-title">introduction.js</span>
                </div>
                <div className="card-body">
                  <p className="about-text">
                    Hello! I'm <strong className="highlight-name">Jenish</strong>, 
                    a passionate and dedicated student at{" "}
                    <strong className="highlight-edu">Red and White Multimedia Education</strong>.
                    <br /><br />
                    I specialize in building dynamic and responsive web applications
                    using the <strong className="highlight-tech">MERN Stack</strong>. 
                    I love solving complex problems with clean, efficient code and 
                    creating user-centric designs that make a difference.
                  </p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="experience-card">
                <h4 className="exp-title">My Journey</h4>
                <p className="exp-text">
                  I've worked on both team-based and individual projects ranging 
                  from simple static websites to full e-commerce applications. 
                  My journey in tech started with <strong>C++</strong> and evolved 
                  through hands-on experience with modern technologies.
                </p>
                
                {/* Tech Stack Progress */}
                <div className="tech-progress">
                  <div className="tech-item">
                    <span className="tech-name">MERN Stack</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">React & Bootstrap</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">Firebase</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="inspiration-quote">
                <div className="quote-icon">💡</div>
                <p className="quote-text">
                  "Every project sharpens my skills and pushes me to learn something new."
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className={`about-visual ${isVisible ? 'visible' : ''}`}>
              {/* Profile Image Container */}
              <div className="profile-image-container">
                <div className="image-wrapper">
                  <div className="main-image">
                    <img src={myImg} alt="Jenish - MERN Stack Developer" />
                    <div className="image-glow"></div>
                  </div>
                  
                  {/* Floating Tech Badges */}
                  <div className="floating-badges">
                    <div className="badge badge-react">
                      <span>⚛️ React</span>
                    </div>
                    <div className="badge badge-node">
                      <span>🟢 Node.js</span>
                    </div>
                    <div className="badge badge-mongo">
                      <span>🍃 MongoDB</span>
                    </div>
                    <div className="badge badge-js">
                      <span>🟨 JavaScript</span>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="animated-border"></div>
                </div>

                {/* Status Card */}
                <div className="status-card">
                  <div className="status-indicator">
                    <div className="pulse-dot"></div>
                    <span>Available for new projects</span>
                  </div>
                  <div className="status-location">
                    <span className="location-icon">📍</span>
                    Based in India
                  </div>
                </div>
              </div>

              {/* Canvas for Background Animation */}
              <canvas 
                ref={canvasRef} 
                className="about-canvas"
              />
            </div>
          </Col>
        </Row>

        {/* Fun Facts */}
        <div className={`fun-facts ${isVisible ? 'visible' : ''}`}>
          <Row className="text-center">
            <Col md={3} sm={6}>
              <div className="fact-item">
                <div className="fact-number">50+</div>
                <div className="fact-label">Projects Built</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="fact-item">
                <div className="fact-number">3+</div>
                <div className="fact-label">Years Coding</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="fact-item">
                <div className="fact-number">100%</div>
                <div className="fact-label">Passion Driven</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="fact-item">
                <div className="fact-number">∞</div>
                <div className="fact-label">Curiosity</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutComp;

