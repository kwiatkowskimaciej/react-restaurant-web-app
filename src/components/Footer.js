import React from 'react';
import Nav from './Nav';

const Footer = () => {
  return (
    <footer>
      <div className='footer-section'>
        <img
          src={require('../images/footer_logo.png')}
          alt="Little Lemon logo"
          width={159}
        />
        <nav id="d-nav">
          <h3>Doormat navigation</h3>
          <Nav className="footer-nav" />
        </nav>
        <div id="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address>
                XXX Michigan Ave <br />
                Chicago, IL
              </address>
            </li>
            <li>
              <a href="tel:+11234567890">+1 123-XXX-7890</a>
            </li>
            <li>
              <a href="mailto:little@lemon.com">little@lemon.com</a>
            </li>
          </ul>
        </div>
        <div id="social">
          <h3>Social media links</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com">
                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
