import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
      <Container>
        <h1 className="project-heading" style={{ textAlign: 'center', marginBottom: '30px' }}>
          My Recent <strong className="Fluorescent-Blue">Works</strong>
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '50px' }}>
          Here are the projects I've developed:
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-vector/food-delivery-logo-with-courier-riding-scooter-city_1308-47752.jpg?t=st=1729960706~exp=1729964306~hmac=0b3b1693d44b2838d23235035cfbd839821a858923c0da013c28e835174aff99&w=826"
              title="Food Munch"
              description={
                <ul>
                  <li>Developed a full-stack web app using HTML, CSS, and JavaScript for seamless user experience</li>
                  <li>Integrated backend functionalities using Node.js, Express.js, and React.js for real-time ordering and payment processing</li>
                  <li>Enabled API integration for managing orders, payments, and customer data efficiently</li>
                  <li>Worked on debugging and troubleshooting backend issues for smooth transactions</li>
                  <li>Engaged with customers to gather feedback and improved UI/UX</li>
                  <li><strong>Skills:</strong> Full Stack Development, API Integration, React.js, Node.js, Express.js, Troubleshooting, Customer Engagement, Payment Processing</li>
                  <li><strong>Live Demo:</strong> <a href="http://aws-workshop-rohith1.s3-website.ap-south-1.amazonaws.com" target="_blank" rel="noopener noreferrer">View Project</a></li>
                </ul>
              }
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-vector/ebook_24908-54030.jpg?t=st=1729960601~exp=1729964201~hmac=53cf67d7543ab6293a877a5c7415b2a742a32c64eb1aac493b5e2fa485be9980&w=740"
              title="LitPicks: Custom Book Recommendations"
              description={
                <ul>
                  <li>Built a recommendation system using Python, pandas, and cosine similarity for effective data analysis</li>
                  <li>Deployed an interactive app with Streamlit for real-time, data-driven recommendations</li>
                  <li>Implemented API integration to streamline data flow and optimize performance</li>
                  <li>Applied data modeling techniques to structure book data and improve recommendation accuracy</li>
                  <li>Utilized debugging tools to ensure smooth user experience</li>
                  <li><strong>Skills:</strong> Data Modeling, API Integration, Python, Streamlit, Troubleshooting, Debugging</li>
                </ul>
              }
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-psd/3d-render-neon-letter-icon_23-2151653664.jpg?t=st=1729960823~exp=1729964423~hmac=5adae33b3ffa980383902e3d19bc5855071c63db994ac2b72f89489e937d1948&w=740"
              title="Portfolio Website"
              description={
                <ul>
                  <li>Developed a responsive personal portfolio website showcasing projects and skills</li>
                  <li>Built with React.js and Bootstrap for modern, responsive design</li>
                  <li>Implemented dark and light mode themes for better user experience</li>
                  <li>Optimized for performance and accessibility </li>
                  <li>Integrated smooth scrolling and animations for enhanced user interaction</li>
                  <li><strong>Skills:</strong> React.js, Bootstrap, Responsive Design, UI/UX, Frontend Development</li>
                </ul>
              }
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-vector/gradient-e-commerce-logo-collection_23-2148962201.jpg?t=st=1729960890~exp=1729964490~hmac=b8bf9c1282b442cd93dbcff677e481aa1d41268f38e5ab50cdf00de609578e6b&w=740"
              title="Nxttrand"
              description={
                <ul>
                  <li>Developed a full-stack web app using HTML, CSS, and JavaScript for seamless user experience</li>
                  <li>Integrated backend functionalities using Node.js, Express.js, and React.js for real-time data processing and visualization</li>
                  <li>Enabled API integration for managing data and optimizing performance</li>
                  <li>Worked on debugging and troubleshooting backend issues for smooth data processing</li>
                  <li>Engaged with customers to gather feedback and improved UI/UX</li>
                  <li><strong>Skills:</strong> Full Stack Development, API Integration, React.js, Node.js, Express.js, Troubleshooting, Customer Engagement, Data Visualization</li>
                </ul>
              }
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;