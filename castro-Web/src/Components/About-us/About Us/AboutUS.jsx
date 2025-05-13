import './AboutUs.css';
import { FaAngleRight } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="aboutus-hero-section overflow-hidden text-center position-relative">
      <div className="aboutus-bg-pattern w-100 h-100 top-0 position-absolute bg-cover bg-cover-center"></div>
      <div className="aboutus-container m-auto position-relative">
        <div className="aboutus-content">
          <h1>About Us</h1>
          <ul className="aboutus-breadcrumb gap-1 d-inline-flex p-0 m-0 align-items-center">
            <li>
              <a href="#" className="" style={{ color: '#848484' }}>
                Home
              </a>
            </li>
            <li>
              <FaAngleRight />
            </li>
            <li style={{ color: '#848484' }}>About Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
