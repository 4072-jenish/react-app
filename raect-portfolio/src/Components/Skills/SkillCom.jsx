import React, { useEffect } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiJquery, SiCplusplus } from 'react-icons/si';
import AOS from 'aos';
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
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C', level: 88 },
];

const Skills = () => {
    useEffect (() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <Container className="my-5" id="skills">
      <h2 className="text-center mb-5 blueColor">Skills</h2>

      <h4 className="mb-4">Frontend</h4>
      <Row className="mb-5">
        {frontendSkills.map((skill, idx) => (
          <Col xs={12} md={6} className="mb-4" key={idx}>
            <div className="d-flex align-items-center mb-2">
              <span style={{ color: skill.color, fontSize: '2rem', marginRight: '10px' }}>
                {skill.icon}
              </span>
              <strong>{skill.name}</strong>
            </div>
            <Row className="" data-aos="fade-up">
                <ProgressBar now={skill.level} label={`${skill.level}%`} />
            </Row>
          </Col>
        ))}
      </Row>

      <h4 className="mb-4">Programming</h4>
      <Row>
        {programmingSkills.map((skill, idx) => (
          <Col xs={12} md={6} className="mb-4" key={idx}>
            <div className="d-flex align-items-center mb-2">
              <span style={{ color: skill.color, fontSize: '2rem', marginRight: '10px' }}>
                {skill.icon}
              </span>
              <strong>{skill.name}</strong>
            </div>
            <Row className="mb-5" data-aos="fade-up">
                <ProgressBar now={skill.level} label={`${skill.level}%`} />
            </Row>

          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
