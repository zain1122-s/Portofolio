import React from "react";
import './header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home" className="navbar-item">shahzain</a>
        </div>
        <div className="navbar-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#" >Services</a>
          <a href="#" >Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;