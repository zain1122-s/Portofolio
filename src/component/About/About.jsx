import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import Zain from "../../assets/Zain.jpg";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="mainclass" ref={aboutRef}>
      <div className="container">
        <div className="s-class">
          <div className={`class-1 ${isVisible ? 'animate-in-left' : ''}`}>
            <div className="image-container">
              <img src={Zain} alt="Shahzain - Frontend Developer" className="photo" />
              <div className="image-overlay"></div>
              <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
              </div>
            </div>
          </div>

          <div className={`class-2 ${isVisible ? 'animate-in-right' : ''}`}>
            <div className="content-wrapper">
              <h1 className="main-title">
                About <span className="highlight">Me</span>
              </h1>
              <h2 className="subtitle">Frontend Developer</h2>

              <div className="description">
                <p>
                  As a passionate frontend developer with 1+ years of experience, I have developed
                  a strong understanding of modern web technologies and best practices.
                </p>
                <p>
                  I specialize in creating responsive, user-friendly web applications using
                  HTML5, CSS3, JavaScript, and frameworks like React.js. My focus is on
                  delivering exceptional user experiences through clean, efficient code.
                </p>
              </div>

              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>

              <div className="button-2">
                <button className="btn2">
                  <span>Read More</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
