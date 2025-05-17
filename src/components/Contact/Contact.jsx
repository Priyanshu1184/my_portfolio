import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      setStatus("SUCCESS");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => setStatus(""), 3000);
    }, (error) => {
      setStatus("ERROR");
      setTimeout(() => setStatus(""), 3000);
    });
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          <Col md={12} className="contact-header">
            <h1>Get In Touch</h1>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
          </Col>
          <Col md={6} className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                {status === "SUCCESS" ? "Sent!" : "Send Message"}
              </button>
              {status === "ERROR" && (
                <p className="error-message">
                  Oops! There was an error. Please try again.
                </p>
              )}
            </form>
          </Col>
          <Col md={6} className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Your Location</p>
            </div>
            <div className="info-item">
              <h3>Social</h3>
              <div className="social-links">
                {/* Add your social media links here */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact; 