import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiJquery, SiCplusplus } from 'react-icons/si';
import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css-3.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/atom.png';
import bootstrap from '../../assets/images/bootstrap.png';
import tailwind from '../../assets/images/Tailwind CSS.png';
import node from '../../assets/images/nodejs.png';
import express from '../../assets/images/Express.png';
import mongo from '../../assets/images/MongoDB.png';
import firebase from '../../assets/images/Firebase.png';
import cpp from '../../assets/images/cpp.png';
import 'aos/dist/aos.css';
import "./SkillCom.css"

const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 90 },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', level: 90 },
  { name: 'jQuery', icon: <SiJquery />, color: '#0769AD', level: 80 },
  { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 85 },
];

const programmingSkills = [
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C', level: 88 },];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState({});
  const sectionRef = useRef(null);

  const frontendSkills = [
    { name: "HTML5", level: 90, icon: `${html}`, color: "#E34F26" },
    { name: "CSS3", level: 85, icon: `${css}`, color: "#1572B6" },
    { name: "JavaScript", level: 88, icon: `${js}`, color: "#F7DF1E" },
    { name: "React", level: 85, icon: `${react}`, color: "#61DAFB" },
    { name: "Bootstrap", level: 80, icon: `${bootstrap}`, color: "#7952B3" },
    { name: "Tailwind", level: 75, icon: `${tailwind}`, color: "#06B6D4" }
  ];

  const programmingSkills = [
    { name: "Node.js", level: 82, icon: `${node}`, color: "#339933" },
    { name: "Express", level: 80, icon: `${express}`, color: "#000000" },
    { name: "MongoDB", level: 78, icon: `${mongo}`, color: "#47A248" },
    { name: "Firebase", level: 75, icon: `${firebase}`, color: "#FFCA28" },
    { name: "C++", level: 70, icon: `${cpp}`, color: "#00599C" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate skills sequentially
          const allSkills = [...frontendSkills, ...programmingSkills];
          allSkills.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => ({
                ...prev,
                [skill.name]: true
              }));
            }, index * 150);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ skill, category }) => (
    <Col lg={6} className="mb-4">
      <div className={`skill-card ${visibleSkills[skill.name] ? 'visible' : ''}`}>
        <div className="skill-header">
          <img className="skill-icon" style={{ color: skill.color }} src={skill.icon}/>
          <div className="skill-info">
            <h4 className="skill-name">{skill.name}</h4>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        </div>
        
        <div className="skill-progress">
          <div 
            className="skill-progress-bar"
            style={{ 
              width: visibleSkills[skill.name] ? `${skill.level}%` : '0%',
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
            }}
          >
            <div className="progress-glow"></div>
          </div>
        </div>

        <div className="skill-category-badge">
          {category}
        </div>
      </div>
    </Col>
  );

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Animated Background */}
      <div className="skills-bg">
        <div className="floating-code">{`</>`}</div>
        <div className="floating-code">{`{}`}</div>
        <div className="floating-code">console</div>
        <div className="floating-code">function</div>
      </div>

      <Container>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-container">
          {/* Frontend Skills */}
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">💻</div>
              <h3 className="category-title">Frontend Development</h3>
            </div>
            <Row>
              {frontendSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} category="Frontend" />
              ))}
            </Row>
          </div>

          {/* Programming Skills */}
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">⚡</div>
              <h3 className="category-title">Backend & Programming</h3>
            </div>
            <Row>
              {programmingSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} category="Backend" />
              ))}
            </Row>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <Row className="text-center">
            <Col md={3} sm={6}>
              <div className="summary-item">
                <div className="summary-number">12+</div>
                <div className="summary-label">Technologies</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="summary-item">
                <div className="summary-number">3+</div>
                <div className="summary-label">Years Experience</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="summary-item">
                <div className="summary-number">50+</div>
                <div className="summary-label">Projects</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="summary-item">
                <div className="summary-number">∞</div>
                <div className="summary-label">Learning</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
