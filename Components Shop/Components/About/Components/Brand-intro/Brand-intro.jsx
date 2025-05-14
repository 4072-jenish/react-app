import { Container, Row, Col, Button } from 'react-bootstrap';
import about1 from '../../../../assets/images/about-1.jpg';
import './Brand-intro.css';
import { CgArrowTopRight } from 'react-icons/cg';

const BrandOverview = () => {
  return (
    <Container className="Brand-intro-section brand-overview">
      <Row className="d-flex align-items-center">
        <Col xl={4} lg={12} className="mb-5 mb-xl-0">
          <div className="features-content d-flex flex-column">
            <div className="text-head">
              <h2 className="m-0" style={{ fontSize: '50px' }}>
                Simple
              </h2>
              <h2 style={{ fontSize: '50px', marginBottom: '12px' }}>
                <span style={{ color: 'red' }}>&</span> Minimalistic
              </h2>
            </div>
            <h3
              style={{
                fontSize: '26px',
                marginBottom: '34px',
                color: '#848484',
              }}
            >
              Secure Checkout
            </h3>
            <p>
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit anim est laborum.
            </p>
            <p>
              Accusantium enim ipsam voluptatem quia voluptas sit aspernatur.
            </p>
            <button className="btn-hover Contact-us-btn fw-semibold mt-3">
              Contact Us <CgArrowTopRight style={{ fontSize: '26px' }} />
            </button>
          </div>
        </Col>

        <Col
          xl={4}
          lg={6}
          className="order-xl-1 order-lg-2 order-3 mb-5 mb-xl-0"
        >
          <img
            src={about1}
            alt="Minimal style"
            className="BrandOverview-img img-fluid w-100"
          />
        </Col>

        <Col xl={4} lg={6} className="order-xl-2 order-lg-3 order-4">
          <div
            className="brand-missions d-flex flex-column mb-5 mb-xl-0"
            style={{ marginBottom: '60px' }}
          >
            <h3 style={{ fontSize: '26px', marginBottom: '34px' }}>
              Castro Overview
            </h3>
            <p>
              Excepteur sint occaecat cupidat non proident sunt in culpa qui
              officia deserunt mollit anim est laborum.accusan enim ipsam
              voluptam quia voluptas sit aspern odit aut.
            </p>
          </div>
          <div className="brand-missions d-flex flex-column">
            <h3 style={{ fontSize: '26px', marginBottom: '34px' }}>
              Our Mission
            </h3>
            <p>
              Excepteur sint occaecat cupidat non proident sunt in culpa qui
              officia deserunt mollit anim est laborum.accusan enim ipsam
              voluptam quia voluptas sit aspern odit aut.
            </p>
            <p>
              Sed quia consequunturmagni dolores eos qui ratione voluptatem.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BrandOverview;
