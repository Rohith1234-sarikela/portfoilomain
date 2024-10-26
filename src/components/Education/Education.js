import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-content">
        <div className="education-item">
          <h3>Malla Reddy College of Engineering</h3>
          <p><strong>Degree:</strong> B. Tech in Electronics and Communication Engineering (ECE)</p>
          <p><strong>Location:</strong> Hyderabad</p>
          <p><strong>Year:</strong> 2021 - 2025</p>
        </div>
        <div className="education-item">
          <h3>Shree Gayathri Junior College</h3>
          <p><strong></strong> Intermediate, MPC</p>
          <p><strong>Location:</strong> Armoor</p>
          <p><strong>Score:</strong> 897/1000</p>
          <p><strong>Year:</strong> 2019 - 2021</p>
        </div>
        <div className="education-item">
          <h3>Naveen Vidyaniketan High School</h3>
          <p><strong></strong> Secondary School Education (SSE)</p>
          <p><strong>Location:</strong> Balkonda</p>
          <p><strong>CGPA:</strong> 9.8%</p>
          <p><strong>Year:</strong> 2018 - 2019</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
