import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

// Import project images
const mycabImages = [
  require("../../Assets/Projects/mycab/IMG-20250515-WA0019.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0021.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0022.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0024.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0025.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0026.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250518-WA0026.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250518-WA0027.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0020.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0023.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0027.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250515-WA0028.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250518-WA0024.jpg"),
  require("../../Assets/Projects/mycab/IMG-20250518-WA0023.jpg"),
];

const hrmsImages = [
  require("../../Assets/Projects/hrms/Dashboard.png"),
  require("../../Assets/Projects/hrms/EmpD.png"),
  require("../../Assets/Projects/hrms/listofemp.png"),
  require("../../Assets/Projects/hrms/lr.png"),
  require("../../Assets/Projects/hrms/Editprofile.png"),
  require("../../Assets/Projects/hrms/emphistory.png"),
  require("../../Assets/Projects/hrms/Event.png"),
];

const ecommerceImages = [
  require("../../Assets/Projects/ecommerce/landing.png"),
  require("../../Assets/Projects/ecommerce/home.png"),
  require("../../Assets/Projects/ecommerce/shopping.png"),
  require("../../Assets/Projects/ecommerce/cart.png"),
  require("../../Assets/Projects/ecommerce/testpayment.png"),
];

const simonImages = [
  require("../../Assets/Projects/simon/home.png"),
  require("../../Assets/Projects/simon/lost.png"),
];

const todoImages = [
  require("../../Assets/Projects/todo/home.png"),
  require("../../Assets/Projects/todo/add.png"),
  require("../../Assets/Projects/todo/completedtask.png"),
  require("../../Assets/Projects/todo/filter.png"),

];

function Projects() {
  const imageResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="vertical-projects">
          <Row className="project-row">
            <Col md={6} className="project-description">
              <h3>MyCab - Ride Booking Platform</h3>
              <p>A full-fledged ride-hailing application built using the MERN stack. It includes real-time features such as live captain tracking using Socket.io, route mapping with Google Maps API, and secure online payments through Stripe.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/MyCab_A_Ride_Booking_Platform" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={6} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {mycabImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img} alt="mycab" className="project-image" />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={6} className="project-description">
              <h3>HR Management System</h3>
              <p>An HR management platform designed to manage employees, departments, and attendance records. Built with the MERN stack, it supports CRUD operations and a clean, responsive interface for administrative tasks.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/StaffSphere_-HR-Management-System-" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={6} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {hrmsImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img} alt="hrms" className="project-image" />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={6} className="project-description">
              <h3>E-Commerce Website</h3>
              <p>A server-rendered e-commerce website built using EJS, plain CSS, and vanilla JavaScript, with Stripe integration for secure and real-time payment processing. The site offers a full shopping experience — dynamic product listings, a shopping cart, and a streamlined checkout flow.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/E-Commerce-Website" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={6} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {ecommerceImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img} alt="ecommerce" className="project-image" />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={6} className="project-description">
              <h3>Simon Game</h3>
              <p>A memory-based game inspired by the classic Simon Says! built using JavaScript and DOM manipulation.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/Simon-Game" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
                <a href="https://simonsaysmindtest.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-button">
                  Demo
                </a>
              </div>
            </Col>
            <Col md={6} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {simonImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img} alt="simon" className="project-image" />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row className="project-row">
            <Col md={6} className="project-description">
              <h3>To-Do List App</h3>
              <p>A simple, lightweight To-Do List application that allows users to manage their daily tasks. Built entirely using HTML, CSS, and vanilla JavaScript, this project helps users add, mark, and delete tasks seamlessly from a single interface.</p>
              <div className="project-links">
                <a href="https://github.com/Priyanshu1184/OCTANET_JULY/tree/main/Week%202" target="_blank" rel="noopener noreferrer" className="project-button">
                  <BsGithub /> GitHub
                </a>
              </div>
            </Col>
            <Col md={6} className="project-showcase">
              <Carousel
                responsive={imageResponsive}
                infinite={true}
                arrows={true}
                className="project-image-carousel"
              >
                {todoImages.map((img, index) => (
                  <div key={index} className="project-image-container">
                    <img src={img} alt="todo" className="project-image" />
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
