import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './ProjectComp.css'
const projects = [
  {
    title: 'First Website',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/f1zgk6cw4qdhvetostnp.png',
    description: 'A personal portfolio website built using HTML and CSS to showcase skills and projects.',
    tech: 'HTML, CSS',
    link: '#',
  },
  {
    title: 'Business Landing Page',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706513/rok9alcznrduadyrzg2q.png',
    description: 'A responsive business landing page using Bootstrap for layout and components.',
    tech: 'HTML, Bootstrap',
    link: '#',
  },
  {
    title: 'Team Collaboration App',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/kaxxta6cbdf0fav8ybec.png',
    description: 'A React-based team project focused on collaboration tools, authentication, and task management.',
    tech: 'React, Firebase (Team Project)',
    link: '#',
  },
  {
    title: 'E-Commerce Web App',
    image: 'https://res.cloudinary.com/dd8rb9luw/image/upload/v1751706514/jf7ydvjupcoppsr118gv.png',
    description: 'A complete e-commerce platform built with React featuring cart, checkout, filters, and Firebase auth.',
    tech: 'React, Redux, Firebase, Cloudinary',
    link: 'https://flipcart-clone-cc07d.web.app/',
  },
];

const Projects = () => {
  return (
    <Container className="my-5" id="projects">
      <h2 className="text-center mb-4 blueColor">Projects</h2>
      <Carousel>
        {projects.map((project, index) => (
          <Carousel.Item key={index} interval={4000}>
            <img
              className="d-block w-100 project-img"
              src={project.image}
              alt={project.title}
            />
            <Carousel.Caption>
              <h5>{project.title}</h5>
              <p className="mb-1">{project.description}</p>
              <small className="text-muted">{project.tech}</small>
              <br />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm mt-2"
              >
                View Project
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Projects;
