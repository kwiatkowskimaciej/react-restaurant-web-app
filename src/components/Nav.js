import React, { useState } from 'react';
import { NavLink  } from 'react-router-dom';

const Nav = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={props.className}>
      <button
        className="menu-icon"
        onClick={handleShowNavbar}
        aria-label={showNavbar ? 'Close menu' : 'Open menu'}
        aria-expanded={showNavbar}
      >
        {showNavbar ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">menu</span>
        )}
      </button>
      <div className={`nav-elements ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
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
