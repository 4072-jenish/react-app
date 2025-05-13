import { Container } from 'react-bootstrap';
import Payment1 from '../../assets/images/card-1.png';
import Payment2 from '../../assets/images/card-2.png';
import Payment3 from '../../assets/images/card-3.png';
import Payment4 from '../../assets/images/card-4.png';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaVimeoV,
} from 'react-icons/fa';

const FooterBottom = () => {
  return (
    <section
      className="Footer-Bottom-Section"
      style={{ backgroundColor: '#141414' }}
    >
      <Container style={{ padding: '25px 12px', maxWidth: '1200px' }}>
        <div className="Footer-Bottom-Wrapper d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="Payment-Methods w-100 mb-md-0">
            <ul className="d-flex gap-2 m-0 p-0 justify-content-center justify-content-md-start">
              <li className="list-unstyled">
                <a href="#">
                  <img src={Payment1} alt="" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#">
                  <img src={Payment2} alt="" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#">
                  <img src={Payment3} alt="" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#">
                  <img src={Payment4} alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div className="Copyright-Section ">
            <div className="Nav-icons-footer d-flex justify-content-center flex-column ">
              <ul className="social-list list-unstyled d-flex align-items-center gap-4 m-0">
                <li style={{ fontSize: '15px' }}>
                  <a href="#">
                    <FaFacebookF
                      className="top-Footer-icons"
                      style={{ color: '#b3b3b3' }}
                    />
                  </a>
                </li>
                <li style={{ fontSize: '15px' }}>
                  <a href="#">
                    <FaTwitter
                      className="top-Footer-icons"
                      style={{ color: '#b3b3b3' }}
                    />
                  </a>
                </li>
                <li style={{ fontSize: '16px' }}>
                  <a href="#">
                    <FaVimeoV
                      className="top-Footer-icons"
                      style={{ color: '#b3b3b3' }}
                    />
                  </a>
                </li>
                <li style={{ fontSize: '20px' }}>
                  <a href="#">
                    <FaGooglePlusG
                      className="top-Footer-icons"
                      style={{ color: '#b3b3b3' }}
                    />
                  </a>
                </li>
              </ul>
              <p
                className="m-0"
                style={{ width: 'max-content', color: '#A6A6A6' }}
              >
                <a
                  className="me-1"
                  href="index.html"
                  style={{ color: '#A6A6A6' }}
                >
                  Castro
                </a>
                © 2020 All Right Reserved
              </p>
            </div>
            <div className="Copyright-Body"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterBottom;
