import React, { useState, useEffect } from "react";
import "./Services.css";
import img1 from "../../assets/1sst.jpg";
import img2 from "../../assets/2s.jpg";
import img3 from "../../assets/3s.jpg";
import img4 from "../../assets/4s.jpg";
import prj1 from "../../assets/prj2/pic1.jpg";
import prj2 from "../../assets/prj2/pic2.jpg";
import prj3 from "../../assets/prj2/pic3.jpg";
import prj4 from "../../assets/prj2/pic4.jpg";
import prj5 from "../../assets/prj2/pic5.jpg";
import proj3_1 from "../../assets/prj3/image2.jpeg";
import proj3_2 from "../../assets/prj3/image2.jpg";
import proj3_3 from "../../assets/prj3/image3.jpg";
import proj3_4 from "../../assets/prj3/image4.jpg";
import proj3_5 from "../../assets/prj3/image5.jpg";

function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const openModal = (images) => {
    setSelectedImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeModal();
  };

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [modalOpen, currentImageIndex]);
  const projects = [
    {
      id: 1,
      title: "YouTube UI Clone | React.js Project",
      description: "A responsive YouTube interface clone built with React, featuring a dynamic sidebar, video grid, and component-based architecture for seamless user experience.",
      image: prj1,
      images: [prj1, prj2, prj3, prj4, prj5],
      technologies: ["React", "CSS", "Image Gallery","routing","lucide react"],
      liveLink: "#",
      githubLink: "#"
    }, {
      id: 2,
      title: "Business Website with Contact Form & Pricing Plans",
      description: "A responsive business website featuring modern design, pricing plans, services, gallery, and contact form for seamless user experience.",
      image: img1,
      images: [img1, img2, img3, img4],
      technologies: ["React", "Node.js"],
      liveLink: "#",
      githubLink: "#"
    },
   
    {
      id: 3,
      title: "Global Esquire Law Firm: Africa Legal Advisory",
      description: "Legal expertise for business, residency, and investment in Africa. Navigate visas, investments, and relocation with confidence through our tailored courses and advisory.",
      image: proj3_1,
      images: [proj3_1, proj3_2, proj3_3, proj3_4, proj3_5],
      technologies: ["React", "CSS", "Responsive Design", "UI/UX"],
      liveLink: "#",
      githubLink: "#"
    }
    // },
    // {
    //   id: 4,
    //   title: "Portfolio Website",
    //   description: "A modern, responsive portfolio website showcasing projects with smooth animations and interactive elements.",
    //   image: img4,
    //   images: [img1, img2, img3, img4],
    //   technologies: ["React", "SCSS", "Framer Motion", "Vite"],
    //   liveLink: "#",
    //   githubLink: "#"
    // },
    // {
    //   id: 5,
    //   title: "E-commerce Platform",
    //   description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard for managing products.",
    //   image: img1,
    //   images: [img1, img2],
    //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    //   liveLink: "#",
    //   githubLink: "#"
    // },
    // {
    //   id: 6,
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   image: img2,
    //   images: [img2],
    //   technologies: ["React", "Material-UI", "routing"],
    //   liveLink: "#",
    //   githubLink: "#"
    // },
  ];

  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <h1 className="services-title">
            My <span className="highlight">Projects</span>
          </h1>
          <p className="services-subtitle">
            Here are some of the projects I've worked on recently. Each project represents a unique challenge and showcases different skills and technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="project-image"
                  onClick={() => openModal(project.images)}
                  onError={() => handleImageError(project.id)}
                  style={{ cursor: 'pointer', display: imageErrors[project.id] ? 'none' : 'block' }}
                />
                {imageErrors[project.id] && (
                  <div className="image-placeholder">
                    <span>Image not available</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.images ? (
                      <button className="project-link live-link" onClick={() => openModal(project.images)}>
                        Live Demo
                      </button>
                    ) : (
                      <a href={project.liveLink} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                    <a href={project.githubLink} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal} onKeyDown={handleKeyDown} tabIndex={0}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            {selectedImages.length > 1 && (
              <>
                <button className="modal-nav modal-prev" onClick={prevImage} aria-label="Previous image">‹</button>
                <button className="modal-nav modal-next" onClick={nextImage} aria-label="Next image">›</button>
              </>
            )}
            <div className="modal-image-container">
              <img
                src={selectedImages[currentImageIndex]}
                alt={`Project image ${currentImageIndex + 1} of ${selectedImages.length}`}
                className="modal-image"
              />
              {selectedImages.length > 1 && (
                <div className="modal-counter">
                  {currentImageIndex + 1} / {selectedImages.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
