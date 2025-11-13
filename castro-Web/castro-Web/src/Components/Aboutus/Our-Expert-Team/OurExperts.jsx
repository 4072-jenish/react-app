
import './OurExperts.css';
import separator1 from '../../../assets/image/separator-1.png';
import { Container, Row, Col } from 'react-bootstrap';
import team1 from '../../../assets/image/team-1.jpg';
import team2 from '../../../assets/image/team-2.jpg';
import team3 from '../../../assets/image/team-3.jpg';

const ExpertsCard = (props) => {
  return (
    <div className="Experts-card">
      <img
        src={props.Expertsimg}
        alt={props.expertname}
        className="img-fluid"
      />
      <div className="Expert-Description">
        <h3 className="fs-4 pt-4">
          <a href="#" style={{ color: '#222222' }}>
            {props.expertname}
          </a>
        </h3>
        <span className="designation" style={{ color: '#848484' }}>
          {props.expertField}
        </span>
      </div>
    </div>
  );
};

const OurExperts = () => {
  return (
    <Container className="Our-Experts-Team text-center">
      <div className="Expert-head-info">
      
      </div>

      <div className="Experts-Body">
        <Row>
          <Col xs={12} sm={6} md={4} className="mb-4 mb-md-0">
            <ExpertsCard
              Expertsimg={team1}
              expertname="Leanne Simpson"
              expertField="Photographer"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4 mb-md-0">
            <ExpertsCard
              Expertsimg={team2}
              expertname="Ray Cooper"
              expertField="Manager"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4 mb-md-0">
            <ExpertsCard
              Expertsimg={team3}
              expertname="Caroline Johnson"
              expertField="Artist"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OurExperts;
