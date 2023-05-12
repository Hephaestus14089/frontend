import {
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope
} from 'react-icons/fa';

import './Footer.scss';
import Newsletter from './Newsletter/Newsletter';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Random text...
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Random text...
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">
              Random text...
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">
              Random text...
            </div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>

          <span className="text">Headphones</span>
          <span className="text">Speakers</span>
          <span className="text">Smart Watches</span>
          <span className="text">Projectors</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>

          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms and Conditions</span>
          <span className="text">Returns</span>
          <span className="text">Contact Us</span>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            SwiftBuy (College Project)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
