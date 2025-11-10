import React, { useEffect, useRef, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import "./FAQComp.css";

const Faq = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [animatedItems, setAnimatedItems] = useState({});
  const sectionRef = useRef(null);

  const faqItems = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in frontend technologies like HTML, CSS, Bootstrap, and React, and also have experience with jQuery and Firebase. My React projects involve component-based architecture, state management, and integration with real APIs and Firebase Authentication. I also work with Cloudinary for media uploads and follow modern development practices such as responsive design, reusable components, and accessibility.",
      icon: "💻"
    },
    {
      question: "Are you available for freelance or collaboration work?",
      answer: "Yes, I am always open to exciting opportunities—whether it's freelance gigs, internships, or long-term collaborations. I enjoy working in teams and can adapt to new environments quickly. You can reach out through my Contact page, and I will respond as soon as possible with availability, timelines, and how we can work together.",
      icon: "🤝"
    },
    {
      question: "What kind of team experience do you have?",
      answer: "I've been involved in multiple team-based projects, including a full-fledged e-commerce platform developed using React, Redux, and Firebase. In these projects, I took on responsibilities like component development, authentication, Cloudinary integration, and code optimization. I understand the importance of Git workflows, version control, and good communication for successful teamwork.",
      icon: "👥"
    },
    {
      question: "Can I view or download your resume?",
      answer: "Yes, my resume is available on the About or Resume page. It includes detailed information about my technical skills, education, and real-world project experience. You can either view it directly or download it as a PDF. If you'd prefer a version tailored for a specific job role, feel free to contact me, and I can provide one.",
      icon: "📄"
    },
    {
      question: "Do you write blogs or contribute to open source?",
      answer: "I'm starting to explore technical writing and plan to post blogs on React fundamentals, Firebase integration, and project walkthroughs soon. I also look forward to contributing to open-source projects as I grow my experience. Stay tuned through my GitHub or connect with me for collaborations.",
      icon: "📝"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate FAQ items sequentially
          faqItems.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedItems(prev => ({
                ...prev,
                [index]: true
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

  const handleAccordionToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section id="faq" className="faq-section" ref={sectionRef}>
      {/* Animated Background */}
      <div className="faq-bg">
        <div className="floating-question">?</div>
        <div className="floating-question">!</div>
        <div className="floating-question">?</div>
        <div className="floating-question">!</div>
      </div>

      <Container>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Quick answers to common questions about my work and services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`faq-item ${animatedItems[index] ? 'visible' : ''} ${activeKey === index.toString() ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* FAQ Header */}
              <div 
                className="faq-header"
                onClick={() => handleAccordionToggle(index.toString())}
              >
                <div className="faq-question-content">
                  <div className="faq-icon">{item.icon}</div>
                  <h3 className="faq-question">{item.question}</h3>
                </div>
                <div className="faq-arrow">
                  {activeKey === index.toString() ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {/* FAQ Answer */}
              <div className={`faq-answer ${activeKey === index.toString() ? 'expanded' : ''}`}>
                <div className="answer-content">
                  <p>{item.answer}</p>
                  
                  {/* Additional Info based on question */}
                  {index === 0 && (
                    <div className="tech-highlights">
                      <div className="tech-tag">React</div>
                      <div className="tech-tag">Firebase</div>
                      <div className="tech-tag">Bootstrap</div>
                      <div className="tech-tag">Cloudinary</div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="availability-status">
                      <div className="status-indicator">
                        <div className="status-dot"></div>
                        <span>Currently Available</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="faq-glow"></div>
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="faq-cta">
          <div className="cta-content">
            <h3 className="cta-title">Still have questions?</h3>
            <p className="cta-text">
              Don't hesitate to reach out! I'm always happy to discuss potential projects, 
              collaborations, or answer any other questions you might have.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <span>Contact Me</span>
                <div className="btn-icon">💬</div>
              </button>
              <button className="cta-btn secondary">
                <span>View Resume</span>
                <div className="btn-icon">📄</div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
