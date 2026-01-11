import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function SkillBars() {
  const skills = [
    { name: "React.js", level: 70, color: "#61DAFB" },
    { name: "JavaScript", level: 75, color: "#F7DF1E" },
    { name: "Node.js", level: 30, color: "#339933" },
    { name: "HTML/CSS", level: 85, color: "#E34F26" },
    { name: "MongoDB", level: 50, color: "#47A248" },
    { name: "TypeScript", level: 40, color: "#3178C6" },
    { name: "Tailwind-Css", level: 60, color: "#38B2AC" },
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
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
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
