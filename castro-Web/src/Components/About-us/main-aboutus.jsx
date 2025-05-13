import { Container } from 'react-bootstrap';
import AboutUs from './Components/About Us/AboutUS';
import BrandOverview from './Components/Brand-intro/Brand-intro';
import CatagoryServices from './Components/Catagory-services/Catagory-services';
import NavbarSection from './Components/Navbar/Navbar';
import TopHeader from './Components/Top-Header/Top-Header';
import OurExperts from './Components/Our-Expert-Team/OurExperts';
import InstagramFollow from './Components/Instagram-follow/Instagram-follow';
import Footer from './Components/Footer/Footer';
import FooterBottom from './Components/Footer-Bottom/Footer-Bottom';

function AboutUS() {
  return (
    <>
      <div className="bg-white ">
        <Container className="p-0" style={{ maxWidth: '1200px' }}>
          <TopHeader />
        </Container>
        <hr className="m-0" style={{ opacity: '0.1' }} />
        <Container className="p-0 sticky-top" style={{ maxWidth: '1200px' }}>
          <NavbarSection />
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
        <Footer />

        <FooterBottom />
      </Container>
    </>
  );
}

export default AboutUS;
