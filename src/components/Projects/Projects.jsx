import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsGithub } from "react-icons/bs";

// Import project images
const mycabImages = [
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0019.jpg"), desc: "✨ Modern Landing Page with Secure Authentication" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0021.jpg"), desc: "📊 Interactive Dashboard with Real-time Analytics" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0022.jpg"), desc: "🗺️ Seamless Ride Booking with Live Maps" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0024.jpg"), desc: "🚗 Smart Vehicle Selection & Fare Calculator" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0026.jpg"), desc: "🔍 Intelligent Driver Matching System" },
  { src: require("../../Assets/Projects/mycab/IMG-20250518-WA0026.jpg"), desc: "📍 Live Driver Tracking & ETA Updates" },
  { src: require("../../Assets/Projects/mycab/IMG-20250518-WA0027.jpg"), desc: "🎯 Real-time Journey Progress Tracking" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0020.jpg"), desc: "🔐 Secure Admin Portal Access" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0023.jpg"), desc: "📈 Advanced Analytics Dashboard" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0027.jpg"), desc: "👁️ Live Ride Monitoring System" },
  { src: require("../../Assets/Projects/mycab/IMG-20250515-WA0028.jpg"), desc: "🧭 Smart Navigation to Pickup Point" },
  { src: require("../../Assets/Projects/mycab/IMG-20250518-WA0024.jpg"), desc: "🔑 Secure OTP Verification System" },
  { src: require("../../Assets/Projects/mycab/IMG-20250518-WA0023.jpg"), desc: "✅ Ride Completion & Rating System" },
];

const hrmsImages = [
  { src: require("../../Assets/Projects/hrms/Dashboard.png"), desc: "📊 Executive Dashboard with Key Metrics" },
  { src: require("../../Assets/Projects/hrms/EmpD.png"), desc: "👤 Employee Profile Management Portal" },
  { src: require("../../Assets/Projects/hrms/listofemp.png"), desc: "📋 Smart Employee Directory System" },
  { src: require("../../Assets/Projects/hrms/lr.png"), desc: "📅 Advanced Leave Management System" },
  { src: require("../../Assets/Projects/hrms/Editprofile.png"), desc: "⚙️ Profile Customization Interface" },
  { src: require("../../Assets/Projects/hrms/emphistory.png"), desc: "📚 Comprehensive Employee Records" },
  { src: require("../../Assets/Projects/hrms/Event.png"), desc: "📆 Event Planning & Calendar System" },
];

const ecommerceImages = [
  { src: require("../../Assets/Projects/ecommerce/landing.png"), desc: "🎯 Dynamic Product Showcase" },
  { src: require("../../Assets/Projects/ecommerce/home.png"), desc: "🏪 Smart Category Navigation" },
  { src: require("../../Assets/Projects/ecommerce/shopping.png"), desc: "🔍 Advanced Product Search" },
  { src: require("../../Assets/Projects/ecommerce/cart.png"), desc: "🛒 Smart Shopping Cart System" },
  { src: require("../../Assets/Projects/ecommerce/testpayment.png"), desc: "💳 Secure Payment Gateway" },
];

const simonImages = [
  { src: require("../../Assets/Projects/simon/home.png"), desc: "🎮 Interactive Game Interface" },
  { src: require("../../Assets/Projects/simon/lost.png"), desc: "🏆 Score Display & Results" },
];

const todoImages = [
  { src: require("../../Assets/Projects/todo/home.png"), desc: "📝 Smart Task Management" },
  { src: require("../../Assets/Projects/todo/add.png"), desc: "➕ Quick Task Creation" },
  { src: require("../../Assets/Projects/todo/completedtask.png"), desc: "✅ Task Progress Tracker" },
  { src: require("../../Assets/Projects/todo/filter.png"), desc: "🔍 Smart Task Filtering" },
];

function Projects() {
  const imageResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    }
  };

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#0F172A", marginBottom: "40px", fontSize: "20px" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="vertical-projects">
          <Row className="project-row">
            <Col md={4} className="project-description">
              <h3>MyCab - Ride Booking Platform</h3>
              <p>A full-fledged ride-hailing application built using the MERN stack. It includes real-time features such as live captain tracking using Socket.io, route mapping with Google Maps API, and secure online payments through Stripe.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/MyCab_A_Ride_Booking_Platform" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={7} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {mycabImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img.src} alt="mycab" className="project-image" />
                    <p className="image-caption">{img.desc}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={4} className="project-description">
              <h3>HR Management System</h3>
              <p>A comprehensive HR management system with features like employee management, attendance tracking, leave management, and event organization. Built with React and Node.js.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/HRMS" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={7} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {hrmsImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img.src} alt="hrms" className="project-image" />
                    <p className="image-caption">{img.desc}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={4} className="project-description">
              <h3>E-Commerce Platform</h3>
              <p>A full-featured e-commerce platform with product management, shopping cart, user authentication, and secure payment integration. Built with the MERN stack.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/E-Commerce" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={7} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {ecommerceImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img.src} alt="ecommerce" className="project-image" />
                    <p className="image-caption">{img.desc}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={4} className="project-description">
              <h3>Simon Game</h3>
              <p>A classic Simon memory game built with HTML, CSS, and JavaScript. Features include sound effects, score tracking, and responsive design.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/Simon-Game" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
                <a href="https://simonsaysmindtest.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-button">
                  Demo
                </a>
              </div>
            </Col>
            <Col md={7} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {simonImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img.src} alt="simon" className="project-image" />
                    <p className="image-caption">{img.desc}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={4} className="project-description">
              <h3>Todo App</h3>
              <p>A feature-rich todo application with task management, filtering, and local storage persistence. Built with React and styled with modern CSS.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/Todo-App" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={7} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {todoImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img.src} alt="todo" className="project-image" />
                    <p className="image-caption">{img.desc}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
