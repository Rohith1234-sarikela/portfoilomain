import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiLinux,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiBootstrap,
  SiC,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Advanced Skills */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
        <p className="paragraph">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
        <p className="paragraph">JavaScript</p>
      </Col>

      {/* Intermediate Skills */}
      <Col xs={4} md={2} className="tech-icons">
        <SiC title="C Programming" />
        <p className="paragraph">C</p>
      </Col>

      {/* Frameworks & Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
        <p className="paragraph">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
        <p className="paragraph">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress title="Express.js" />
        <p className="paragraph">Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
        <p className="paragraph">Next.js</p>
      </Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML" />
        <p className="paragraph">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS" />
        <p className="paragraph">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap title="Bootstrap" />
        <p className="paragraph">Bootstrap</p>
      </Col>

      {/* Tools & Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
        <p className="paragraph">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux title="Linux" />
        <p className="paragraph">Linux</p>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB" />
        <p className="paragraph">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
        <p className="paragraph">MySQL</p>
      </Col>
    </Row>
  );
}

export default Techstack;
