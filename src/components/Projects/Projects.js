import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Import your project images here
// import ProjectImage1 from "../../Assets/Projects/project1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Portfolio </strong>
        </h1>
        <p style={{ color: "white", marginBottom: "10px" }}>
          Here are some of my key achievements and projects.
        </p>

        {/* Project Stats */}
        <div className="project-stats-bar">
          <div className="project-stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Case Studies</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>

        {/* Professional Projects Section */}
        <h2
          className="project-sub-heading"
          style={{
            color: "#ffd700",
            fontSize: "1.8em",
            marginTop: "50px",
            marginBottom: "25px",
            textAlign: "left",
            borderLeft: "4px solid #00d4ff",
            paddingLeft: "15px",
            textShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
          }}
        >
          <strong style={{ color: "#00d4ff" }}>💼</strong> Professional Work
        </h2>
        <p
          style={{
            color: "#8b8b9a",
            marginBottom: "20px",
            fontStyle: "italic",
          }}
        >
          Key projects and achievements from my professional experience
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="[Project Title 1]"
              description="[Add description of your business project, case study, or professional achievement. Include metrics and impact where possible.]"
              demoLink="#"
              isOrganization={true}
              techStack={["Strategy", "Analysis", "Leadership"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="[Project Title 2]"
              description="[Describe a significant business project you worked on - market research, financial analysis, business development initiative, etc.]"
              demoLink="#"
              isOrganization={true}
              techStack={["Finance", "Research", "Planning"]}
            />
          </Col>
        </Row>

        {/* Academic Projects Section */}
        <h2
          className="project-sub-heading"
          style={{
            color: "#00d4ff",
            fontSize: "1.8em",
            marginTop: "40px",
            marginBottom: "25px",
            textAlign: "left",
            borderLeft: "4px solid #ff0080",
            paddingLeft: "15px",
            textShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
          }}
        >
          <strong style={{ color: "#ff0080" }}>📚</strong> Academic & Case Studies
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="[MBA Case Study]"
              description="[Describe an MBA project or case study you worked on. Include the business problem solved and methodologies used.]"
              demoLink="#"
              techStack={["Case Analysis", "Strategy", "Excel"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="[Research Project]"
              description="[Describe any research or thesis work from your MBA or B.Com. Include the topic, methodology, and key findings.]"
              demoLink="#"
              techStack={["Research", "Data Analysis", "Report"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="[Business Plan]"
              description="[Describe a business plan or entrepreneurship project you developed during your studies or independently.]"
              demoLink="#"
              techStack={["Planning", "Finance", "Marketing"]}
            />
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="project-cta">
          <p>Interested in working together?</p>
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Let's Discuss Opportunities
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
