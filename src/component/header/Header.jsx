import React, { useState, useEffect } from "react";
import './header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home" className="navbar-item" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <span className="brand-text">Shahzain</span>
            <span className="brand-dot">.</span>
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;