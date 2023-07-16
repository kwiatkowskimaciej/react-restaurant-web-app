import Nav from './Nav';

const Footer = () => {
  return (
    <footer>
      <img
        src={require('../images/footer_logo.png')}
        alt="Little Lemon logo"
        width={159}
      />
      <div id="d-nav">
        <h3>Doormat navigation</h3>
        <Nav className="footer-nav"/>
      </div>
      <div id="contact">
        <h3>Contact</h3>
        <ul>
          <li>
            444 Michigan Ave <br />
            Chicago, IL
          </li>
          <li>
            +1 123-456-7890
          </li>
          <li>
            little@lemon.com
          </li>
        </ul>
      </div>
      <div id="social">
        <h3>Social media links</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i>Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i>Instagram</a>
          </li>
          <li>
            <a href="https://www.tiktok.com"><i className="fa-brands fa-tiktok"></i>TikTok</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
