import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav>
      <div className="menu-icon" onClick={handleShowNavbar}>
        {showNavbar ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">menu</span>}
      </div>
      <div className={`nav-elements ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
