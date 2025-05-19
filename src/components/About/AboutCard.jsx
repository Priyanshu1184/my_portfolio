import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <blockquote className="about-blockquote">
      <p style={{ textAlign: "justify" }}>
        Hey! I'm <span className="purple">Priyanshu Sahoo</span> — a
        <span className="purple">Full Stack Web Developer </span> who’s excited about building cool stuff with the MERN stack ⚙️. 
        I’ve worked on awesome projects like an e-commerce website 🛒, an HR management system 🧑‍💼, and MyCab 🚕 — a real-time ride-booking website.
      </p>
      <p style={{ textAlign: "justify" }}>
        When I'm not coding,  I’m usually:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> 🎮 Gaming
        </li>
        <li className="about-activity">
          <ImPointRight /> ✈️ Traveling and exploring new places
        </li>
        <li className="about-activity">
          <ImPointRight /> 🎧 Vibing to music
        </li>
        <li className="about-activity">
          <ImPointRight /> 💡 Dreaming up new project ideas
        </li>
      </ul>

      <p className="about-quote">
        Always learning. Always building. 🚀
      </p>
    </blockquote>
  );
}

export default AboutCard;
