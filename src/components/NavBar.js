import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="menu">
      <a className="menu__item menu__item_active" href="#">Домой</a>
      <a className="menu__item" href="#">Советы</a>
    </nav>
  );
}

export default NavBar;