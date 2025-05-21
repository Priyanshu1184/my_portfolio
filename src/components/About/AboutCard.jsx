import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <blockquote className="about-blockquote">
      <p style={{ textAlign: "justify" }}>
        Hey! I'm <span className="purple">Priyanshu Sahoo</span>, a web developer focused on creating clean, functional, and engaging user experiences. I specialize in the <span className="purple">MERN stack (MongoDB, Express.js, React, Node.js)</span> and have worked on projects like an e-commerce website, an HR management system, and MyCab — a ride-hailing web app.
      </p>
      <p style={{ textAlign: "justify" }}>
        I enjoy solving problems through code and bringing creative ideas to life in the browser. I'm currently expanding my skillset by learning <span className="purple">Next.js</span> and <span className="purple">TypeScript</span>, while exploring advanced concepts in frontend performance, server-side rendering, and modern UI/UX patterns.
      </p>
      <p style={{ textAlign: "justify" }}>
        I love building real-world projects that challenge me to grow, collaborate, and think critically about how users interact with technology. Whether it's working on full-stack features or experimenting with animations and APIs, I'm always up for learning something new.
      </p>
      <p style={{ textAlign: "justify" }}>
        When I'm not coding,  I'm usually:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> 🎮 Gaming
        </li>
        <li className="about-activity">
          <ImPointRight /> ✈️ Traveling and exploring new places
        </li>
        <li className="about-activity">
          <ImPointRight /> 🎧 Listening to music
        </li>
        <li className="about-activity">
          <ImPointRight /> 💡 Brainstorming side projects and trying new tech
        </li>
      </ul>

      <p className="about-quote">
        I'm always learning. Always building. 🚀
      </p>
    </blockquote>
  );
}

export default AboutCard;
