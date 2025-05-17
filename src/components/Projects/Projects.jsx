import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=" MyCab - Ride Booking Platform"
              description="A full-fledged ride-hailing application built using the MERN stack. It includes real-time features such as live captain tracking using Socket.io, route mapping with Google Maps API, and secure online payments through Stripe."
              ghLink="https://github.com/Priyanshu1184/MyCab_A_Ride_Booking_Platform"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HR Management System"
              description="An HR management platform designed to manage employees, departments, and attendance records. Built with the MERN stack, it supports CRUD operations and a clean, responsive interface for administrative tasks."
              ghLink="https://github.com/Priyanshu1184/StaffSphere_-HR-Management-System-"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce Website"
              description="A front-end e-commerce website built using HTML, CSS, and vanilla JavaScript, enhanced with Stripe payment integration for real-time checkout functionality. This project demonstrates both aesthetic design and functional e-commerce flow, from product browsing to secure online payment."
              ghLink="https://github.com/Priyanshu1184/E-Commerce-Website"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chatbot"
              description="A simple rule-based chatbot designed to answer common queries about Bhilai Institute of Technology, Durg (BIT Durg). The project uses Python on the backend to process user input and deliver predefined responses, while the frontend is built using HTML and CSS to provide an interactive chat interface."
              ghLink="https://github.com/Priyanshu1184/Chatbot"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Simon Game"
              description="A memory-based game inspired by the classic Simon Says! built using JavaScript and DOM manipulation."
              ghLink="https://github.com/Priyanshu1184/Simon-Game"
              demoLink="#"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="To-Do List App"
              description="A simple, lightweight To-Do List application that allows users to manage their daily tasks. Built entirely using HTML, CSS, and vanilla JavaScript, this project helps users add, mark, and delete tasks seamlessly from a single interface."
              ghLink="https://github.com/Priyanshu1184/OCTANET_JULY/tree/main/Week%202"
              demoLink="#" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
