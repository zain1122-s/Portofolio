import React from 'react'
import "./Footer.scss"
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="brand-name">
              <span className="brand-text">Shahzain</span>
              <span className="brand-dot">.</span>
            </h3>
            <p className="brand-description">
              Passionate Frontend Developer creating amazing digital experiences
              with modern technologies and innovative solutions.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/zain1122-s"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shahzain-ali-928a21322/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="#contact"
                className="social-link"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                aria-label="Contact Me"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="links-title">Quick Links</h4>
            <ul className="links-list">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4 className="services-title">Services</h4>
            <ul className="services-list">
              <li>Frontend Development</li>
              <li>React Applications</li>
              <li>Responsive Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="contact-title">Get In Touch</h4>
            <div className="contact-info">
              <p>Ready to bring your ideas to life?</p>
              <p>Let's create something amazing together!</p>
              <a
                href="#contact"
                className="contact-btn"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              Copyright © {new Date().getFullYear()} by{' '}
              <span className="highlight">Shahzain Alam</span> | All Rights Reserved.
            </p>
          </div>
          <div className="footer-actions">
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> and lots of ☕
            </p>
            <button
              className="scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>
    </footer>
  )
}

export default Footer
