import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import "./Contact.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
    
    const currentTime = new Date().toLocaleString();

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_USER_ID
    )
    .then((response) => {
      setStatus("SUCCESS");
      setFormData({
        name: "",
        email: "",
        message: "",
        time: currentTime,
      });
      setTimeout(() => setStatus(""), 3000);
    }, (error) => {
      console.log("Error sending email:", error);
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
              <p>sahoo.priyanshu184@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Durg, Chhattisgarh</p>
            </div>
            <div className="home-about-social" style={{ marginTop: '32px' }}>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/priyanshu1184"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/sahoo1184"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/priyanshu-sahoo1184/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/priyanshu_1184"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact; 