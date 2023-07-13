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
        <Nav />
      </div>
      <div id="contact">
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div id="social">
        <h3>Social media links</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Tik tok</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
