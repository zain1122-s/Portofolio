import React, { useEffect, useRef, useState } from "react";
import "./context.scss";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Zain from '../../assets/Zain.jpg';
import CV from '../../assets/cv/White simple Sales Representative Cv Resume (1).pdf';

function Contect() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Shahzain_Alam_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="main-a" ref={heroRef}>
      <div className="container">
        <div className="main-b">
          <div className={`text-section ${isVisible ? 'animate-in-left' : ''}`}>
            <div className="greeting">
              <span className="hello">Hello, I'm</span>
            </div>

            <h1 className="main-title">
              <span className="name">Shahzain Alam</span>
            </h1>

            <div className="dynamic-title">
              <span className="prefix">I'm a </span>
              <span className="role">Frontend Developer</span>
            </div>

            <p className="description">
              Passionate frontend developer with 1+ years of experience creating
              responsive, user-friendly web applications. I specialize in modern
              technologies and delivering exceptional digital experiences.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/zain1122-s"
                className="social-link github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
                <span className="social-tooltip">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shahzain-ali-928a21322/"
                className="social-link linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
                <span className="social-tooltip">LinkedIn</span>
              </a>
            </div>

            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleDownloadCV}>
                <FaDownload className="btn-icon" />
                <span>Download CV</span>
              </button>

              <a href="#contact" className="btn-secondary">
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={`image-section ${isVisible ? 'animate-in-right' : ''}`}>
            <div className="image-container">
              <div className="image-wrapper">
                <img src={Zain} alt="Shahzain Alam - Frontend Developer" className="profile-image" />
                <div className="image-glow"></div>
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
              </div>

              <div className="scroll-indicator">
                <div className="scroll-text">Scroll Down</div>
                <div className="scroll-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
}

export default Contect;
