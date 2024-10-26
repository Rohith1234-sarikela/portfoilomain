import React from "react";
import { Col, Row } from "react-bootstrap";

const Toolstack = () => {
  const otherSkills = [
    { skill: "Leadership and Team Management" },
    { skill: "Project Coordination and Mentorship" },
    { skill: "Presentation and Public Speaking" },
    { skill: "PowerPoint and Visual Communication" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {otherSkills.map((item, index) => (
        <Col xs={12} md={3} className="tech-icons" key={index}>
          <p className="paragraph">{item.skill}</p>
        </Col>
      ))}
    </Row>
  );
};

export default Toolstack;
