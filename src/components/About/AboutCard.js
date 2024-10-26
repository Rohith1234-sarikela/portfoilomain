import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./AboutCard.css"; // Assuming you have a CSS file for custom styles

function AboutCard() {
  return (
    <Card className="quote-card-view shadow-lg border-0 rounded-lg">
      <Card.Body className="p-4">
        <blockquote className="blockquote mb-0" data-aos="fade-up">
          <p style={{ textAlign: "justify", fontSize: "1.1rem", color: "#333" }}>
            <span className="primary-header" style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Hello, I'm Rohith Sarikela!</span>
            <br />
            <span style={{ color: "#666" }}>A dedicated Full Stack Developer from Hyderabad, India</span>
            <br />
            <br />
            I specialize in building dynamic, user-focused applications and am driven by a passion for continuous improvement and impactful results. Here’s what defines my journey and expertise:
          </p>
          <ul style={{ listStyleType: "none", padding: "0", margin: "1rem 0" }}>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} /> 
              <span>Full Stack Development & Modern UI/UX</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} /> 
              <span>API Integration & Backend Efficiency</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} /> 
              <span>Troubleshooting & Debugging Mastery</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} /> 
              <span>Enhancing User Experience</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} /> 
              <span>Team Collaboration & Project Engagement</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
