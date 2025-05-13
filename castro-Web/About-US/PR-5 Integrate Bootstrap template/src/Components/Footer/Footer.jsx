import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import footerlogo from '../../assets/images/footer-logo-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const FooterLinksSection = ({ title, linames = [] }) => (
  <div className="mb-4 d-flex flex-column ">
    <h3 className="text-white mb-4 fs-4 fw-semibold text-start">{title}</h3>
    <ul className="list-unstyled footer-links text-start d-flex flex-column gap-3">
      {linames.map((name, index) => (
        <li key={index}>
          <a href="#" className="text-decoration-none">
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Contactbody = ({ ContactIcon, iconsdescription }) => (
  <div className="d-flex align-items-start gap-3 mb-3 text-start">
    <FontAwesomeIcon
      icon={ContactIcon}
      style={{ color: '#A6A6A6', fontSize: '25px', opacity: '0.6' }}
      className="mt-1"
    />
    <span style={{ color: '#A6A6A6' }}>{iconsdescription}</span>
  </div>
);

const Footer = () => {
  return (
    <Container
      fluid
      className="text-light mt-5"
      style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid #ffffff1a',
        padding: '100px 0',
      }}
    >
      <Container style={{ maxWidth: '1200px' }}>
        <Row>
          <Col lg={6} md={12}>
            <Row>
              <Col md={4} xs={12} className="mtext-center text-md-start">
                <img
                  src={footerlogo}
                  alt="Footer Logo"
                  className="img-fluid mb-3"
                  style={{ maxWidth: '200px' }}
                />
              </Col>
              <Col md={4} xs={12}>
                <FooterLinksSection
                  title="Category"
                  linames={['Men', 'Women', 'Kids', 'Accessories', 'Shoe']}
                />
              </Col>
              <Col md={4} xs={12}>
                <FooterLinksSection
                  title="Useful Link"
                  linames={[
                    'News & Tips',
                    'About Us',
                    'Terms & Conditions',
                    'Our Shop',
                    'Contact Us',
                  ]}
                />
              </Col>
            </Row>
          </Col>

          <Col lg={6} md={12}>
            <Row>
              <Col md={6} xs={12}>
                <h3 className="text-white mb-4 fs-4 fw-semibold">Contact</h3>
                <Contactbody
                  ContactIcon={faLocationDot}
                  iconsdescription="4708 Ruecker Wall, Kassandratown, HI"
                />
                <Contactbody
                  ContactIcon={faPhone}
                  iconsdescription="+2(305) 587-3407"
                />
                <Contactbody
                  ContactIcon={faEnvelope}
                  iconsdescription="info@example.com"
                />
              </Col>
              <Col md={6} xs={12}>
                <h3 className="text-white mb-4 fs-4 fw-semibold text-start">
                  Newsletter
                </h3>
                <p
                  className="small mb-4 text-start"
                  style={{ color: '#A6A6A6' }}
                >
                  4708 Ruecker Wall, Kassandratown, HI 97729
                </p>
                <div className="mb-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control bg-dark text-light border-secondary"
                  />
                </div>
                <button className="Subscribe-btn btn btn-danger ">
                  Subscribe
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
