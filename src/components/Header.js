import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    let path = '/';
    navigate(path);
  };

  return (
    <header>
      <img
        src={require('../images/logo.png')}
        alt="Little Lemon logo"
        width={200}
        onClick={handleClick}
      />
      <Nav className="header-nav" />
    </header>
  );
};

export default Header;
