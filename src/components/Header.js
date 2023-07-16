import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <img
        src={require('../images/logo.png')}
        alt="Little Lemon logo"
        width={200}
      />
      <Nav className="header-nav"/>
    </header>
  );
};

export default Header;
