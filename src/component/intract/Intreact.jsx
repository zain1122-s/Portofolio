import React, { useState, useRef, useEffect } from 'react'
import './Intract.scss'
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

function Intreact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = 'service_c8swhrm';
    const templateId = 'template_4jouh99';
    const publicKey = 'zEly-UFInxiXvJmpz';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Shahzain Alam',
      subject: formData.subject,
      message: formData.message
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("Email sent successfully!", response);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.log('Error sending email:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className={`intract ${isVisible ? 'animate-in' : ''}`} ref={contactRef}>
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h1 className="contact-title">
              Contact <span className="highlight">Me</span>
            </h1>
            <p className="contact-subtitle">
              Let's work together! Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group full-width">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group full-width">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                  rows="6"
                  disabled={isSubmitting}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="status-message success">
                <FaCheck className="status-icon" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                <FaExclamationTriangle className="status-icon" />
                <span>Failed to send message. Please try again or contact me directly.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Intreact
export const ContactUs = Intreact;
