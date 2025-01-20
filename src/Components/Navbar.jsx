import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Domino's</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/menu">Menú</a></li>
        <li><a href="/promotions">Promociones</a></li>
        <li><a href="/order-tracker">Sigue tu pedido</a></li>
        <li><a href="/stores">Tiendas</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
