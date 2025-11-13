import { Container, Row, Col } from 'react-bootstrap';
import './CatagoryServices.css';
import vehicleicon from '../../../assets/image/vehicle.png';
import hourssupport from '../../../assets/image/24-hours-support.png';
import securePayment from '../../../assets/image/secure-payment.png';
import reloadicon from '../../../assets/image/reload.png';
import seperator3 from '../../../assets/image/separator-3.png';

const Storeservices = (props) => {
  return (
    <>
      <div className="Catagory-Common-style d-flex gap-4">
        <div className="Catagory-icon">
          <img
            src={props.iconsource}
            style={{ height: '50px', width: '50px' }}
          />
        </div>
        <div className="Catagory-Description">
          <h3>{props.headtext}</h3>
          <p style={{ color: '#848484', marginBottom: '33px' }}>
            {props.bodytext}
          </p>
        </div>
      </div>
    </>
  );
};

const CatagoryServices = () => {
  return (
    <>
      <Container fluid className="p-0">
        <section className="Catagory-Services">
          <Row>
            <Col
              md={12}
              lg={6}
              className="p-0"
              style={{ backgroundColor: '#edf0f5' }}
            >
              <div className="Cotent-head mx-auto">
                <div className="Contact-description d-flex flex-column gap-2">
                
                  <div className="Catagory-info-box">
                    <Row>
                      <Col sm={6} xs={12}>
                        <div className="category-service-item">
                          <Storeservices
                            iconsource={vehicleicon}
                            headtext="Free Shipping"
                            bodytext="Free shipping on orders over $100"
                          />
                        </div>
                      </Col>
                      <Col sm={6} xs={12}>
                        <div className="category-service-item">
                          <Storeservices
                            iconsource={hourssupport}
                            headtext="Support 24/7"
                            bodytext="Contact us 24 hours a day, 7 days a week"
                          />
                        </div>
                      </Col>
                      <Col sm={6} xs={12}>
                        <div className="category-service-item">
                          <Storeservices
                            iconsource={securePayment}
                            headtext="Secure Payment"
                            bodytext="We ensure secure payment with PEV"
                          />
                        </div>
                      </Col>
                      <Col sm={6} xs={12}>
                        <div className="category-service-item">
                          <Storeservices
                            iconsource={reloadicon}
                            headtext="30 Days Return"
                            bodytext="Simply return it within 30 days for an exchange."
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6} className="p-0">
              <div className="T-shirt-image"></div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default CatagoryServices;
