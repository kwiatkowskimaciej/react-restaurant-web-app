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
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order-online">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
