import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Top-Header.css';
import { AiOutlineMail } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaVimeoV } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdKeyboardArrowDown } from 'react-icons/md';

const TopHeader = () => {
  return (
    <Navbar className="Top-header">
      <Navbar.Brand
        href="#home"
        className="d-flex  gap-4   flex-wrap"
        style={{ padding: '14px 0' }}
      >
        <div className="Top-contact-addreass top-left-info d-flex align-items-center">
          <AiOutlineMail className="opacity-50" style={{ fontSize: '14px' }} />
          <a href="#" className="text-decoration-none">
            support@example.com
          </a>
        </div>

        <div className="Top-location-details top-left-info d-flex align-items-center">
          <TfiWorld className="opacity-50" style={{ fontSize: '14px' }} />
          <a href="#" className="text-decoration-none">
            Kleine Pierbard 8-6 2249 KV Vries
          </a>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <div className="social-icons d-flex align-items-center gap-4">
            <ul className="social-list list-unstyled d-flex align-items-center gap-4 m-0">
              <li style={{ fontSize: '15px' }}>
                <a href="#">
                  <FaFacebookF
                    className="top-header-icons"
                    style={{ color: '#b3b3b3' }}
                  />
                </a>
              </li>
              <li style={{ fontSize: '15px' }}>
                <a href="#">
                  <FaTwitter
                    className="top-header-icon"
                    style={{ color: '#b3b3b3' }}
                  />
                </a>
              </li>
              <li style={{ fontSize: '16px' }}>
                <a href="#">
                  <FaVimeoV
                    className="top-header-icon"
                    style={{ color: '#b3b3b3' }}
                  />
                </a>
              </li>
              <li style={{ fontSize: '20px' }}>
                <a href="#">
                  <FaGooglePlusG
                    className="top-header-icon"
                    style={{ color: '#b3b3b3' }}
                  />
                </a>
              </li>
            </ul>
            <span></span>
            <div className="Top-language d-flex align-items-center gap-2">
              <div
                className="Top-lang-icon"
                style={{ margin: '0', color: '#222222' }}
              >
                <img
                  src="/public/images/icon-lang.png"
                  style={{ height: '16px' }}
                  alt=""
                />
              </div>
              <div className="Top-Drop-dpwn d-flex gap-5">
                <NavDropdown
                  className="p-0"
                  style={{ fontSize: '14px', width: '50px' }}
                  id="nav-dropdown-dark-example"
                  title={
                    <>
                      English
                      <MdKeyboardArrowDown style={{ marginLeft: '5px' }} />
                    </>
                  }
                  menuVariant="light"
                >
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    German
                  </li>
                  <NavDropdown.Divider />
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    Italian
                  </li>
                  <NavDropdown.Divider />
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    Chinese
                  </li>
                  <NavDropdown.Divider />
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    Russian
                  </li>
                </NavDropdown>

                <NavDropdown
                  className="p-0"
                  style={{ fontSize: '14px', width: '50px' }}
                  id="nav-dropdown-dark-example"
                  title={
                    <>
                      USD
                      <MdKeyboardArrowDown style={{ marginLeft: '5px' }} />
                    </>
                  }
                  menuVariant="light"
                >
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    USD
                  </li>
                  <NavDropdown.Divider />
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    UK
                  </li>
                  <NavDropdown.Divider />
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    URO
                  </li>
                  <NavDropdown.Divider />
                  <li style={{ fontSize: '14px' }} className="dropdown-item">
                    Spanish
                  </li>
                </NavDropdown>
              </div>
            </div>
          </div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopHeader;
