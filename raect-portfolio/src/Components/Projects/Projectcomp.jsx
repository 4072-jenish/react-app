import React, { useEffect, useRef, useState } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import './ProjectComp.css'

const projects = [
  {
    title: 'First Website',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/f1zgk6cw4qdhvetostnp.png',
    description: 'A personal portfolio website built using HTML and CSS to showcase skills and projects.',
    tech: 'HTML, CSS',
    link: '#',
    github: '#',
    category: 'Frontend'
  },
  {
    title: 'Business Landing Page',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706513/rok9alcznrduadyrzg2q.png',
    description: 'A responsive business landing page using Bootstrap for layout and components.',
    tech: 'HTML, Bootstrap',
    link: '#',
    github: '#',
    category: 'Frontend'
  },
  {
    title: 'Team Collaboration App',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/kaxxta6cbdf0fav8ybec.png',
    description: 'A React-based team project focused on collaboration tools, authentication, and task management.',
    tech: 'React, Firebase (Team Project)',
    link: 'https://castro-app-57391.web.app',
    github: '#',
    category: 'Full Stack'
  },
  {
    title: 'E-Commerce Web App',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/jf7ydvjupcoppsr118gv.png',
    description: 'A complete e-commerce platform built with React featuring cart, checkout, filters, and Firebase auth.',
    tech: 'React, Redux, Firebase, Cloudinary',
    link: 'https://flipcart-clone-cc07d.web.app/',
    github: '#',
    category: 'Full Stack'
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState({});
  const sectionRef = useRef(null);

  const categories = ['All', 'Frontend', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate projects sequentially
          filteredProjects.forEach((project, index) => {
            setTimeout(() => {
              setVisibleProjects(prev => ({
                ...prev,
                [project.title]: true
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeFilter]);

  const ProjectCard = ({ project, index }) => (
    <Col lg={6} className="mb-4">
      <div 
        className={`project-card ${visibleProjects[project.title] ? 'visible' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Project Image */}
        <div className="project-image-container">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-links">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-demo"
              >
                <span>🌐 Live Demo</span>
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github"
              >
                <span>💻 Code</span>
              </a>
            </div>
          </div>
          <div className="project-category">{project.category}</div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          {/* Tech Stack */}
          <div className="project-tech">
            {project.tech.split(', ').map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>

          {/* Project Stats */}
          <div className="project-stats">
            <div className="stat">
              <div className="stat-icon">🚀</div>
              <div className="stat-text">Live</div>
            </div>
            <div className="stat">
              <div className="stat-icon">⭐</div>
              <div className="stat-text">Featured</div>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="project-glow"></div>
      </div>
    </Col>
  );

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Animated Background */}
      <div className="projects-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <Container>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A collection of my recent work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
              <span className="filter-dot"></span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <Row className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </Row>

        {/* Call to Action */}
        <div className="projects-cta">
          <div className="cta-content">
            <h3 className="cta-title">Want to see more?</h3>
            <p className="cta-text">
              I'm constantly working on new projects and improving my skills. 
              Let's build something amazing together!
            </p>
            <button className="cta-btn">
              <span>Get In Touch</span>
              <div className="btn-arrow">→</div>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Projects;
