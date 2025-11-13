import { Container } from 'react-bootstrap';
import AboutUs from './About Us/AboutUS';
import BrandOverview from './Brand-intro/Brand-intro';
import CatagoryServices from './Catagory-services/Catagory-services';
import OurExperts from './Our-Expert-Team/OurExperts';
import InstagramFollow from './Instagram-follow/Instagram-follow';

function AboutUS() {
  return (
    <>
      <div className="bg-white ">
        <Container className="p-0" style={{ maxWidth: '1200px' }}>
        </Container>
        <hr className="m-0" style={{ opacity: '0.1' }} />
        <Container className="p-0 sticky-top" style={{ maxWidth: '1200px' }}>
        </Container>
      </div>
      <AboutUs style={{ maxWidth: '1200px' }} />
      <Container className="p-0" style={{ maxWidth: '1200px' }}>
        <BrandOverview />
      </Container>
      <Container fluid>
        <CatagoryServices />
      </Container>
      <Container className="p-0" style={{ maxWidth: '1200px' }}>
        <OurExperts />
      </Container>
      <InstagramFollow style={{ maxWidth: '1200px' }} />

      <Container fluid className="p-0">
      </Container>
    </>
  );
}

export default AboutUS;
