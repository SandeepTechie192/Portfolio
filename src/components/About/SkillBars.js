import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function SkillBars() {
  const skills = [
    { name: "Financial Analysis", level: 85, color: "#4CAF50" },
    { name: "Business Strategy", level: 80, color: "#2196F3" },
    { name: "MS Excel Advanced", level: 90, color: "#217346" },
    { name: "Market Research", level: 75, color: "#FF5722" },
    { name: "Data Analytics", level: 70, color: "#9C27B0" },
    { name: "Leadership", level: 85, color: "#E91E63" },
    { name: "Presentation Skills", level: 88, color: "#D24726" },
  ];

  return (
    <Container className="skill-bars-section">
      <h2 className="skill-bars-title">
        Skill <span className="purple">Proficiency</span>
      </h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="skill-bar-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div
                className="skill-bar-fill"
                style={{
                  width: `${skill.level}%`,
                  background: skill.color,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="skill-bar-glow" style={{ background: skill.color }} />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SkillBars;
