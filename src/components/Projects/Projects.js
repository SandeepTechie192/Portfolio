import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Cremeborne from "../../Assets/Projects/Cremeborne.png";
import Aahar from "../../Assets/Projects/Aahar.png";
import Hyggex from "../../Assets/Projects/Hyggex.png";
import Ojas from "../../Assets/Projects/Ojas.png";
import Designyard from "../../Assets/Projects/The design yard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", marginBottom: "10px" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Project Stats */}
        <div className="project-stats-bar">
          <div className="project-stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Personal</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Professional</span>
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
          <strong style={{ color: "#00d4ff" }}>💼</strong> Professional Projects
        </h2>
        <p
          style={{
            color: "#8b8b9a",
            marginBottom: "20px",
            fontStyle: "italic",
          }}
        >
          Projects developed during my professional experience at organizations
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hyggex}
              isBlog={false}
              title="AdaptMate"
              description="A professional enterprise solution built for adaptmate.in. This platform provides innovative solutions with a focus on user engagement and business efficiency. Developed as part of organizational requirements."
              demoLink="https://adaptmate.in/"
              isOrganization={true}
              techStack={["React.js", "JavaScript", "Tailwind-Css", "Redux"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ojas}
              isBlog={false}
              title="Ojas Occasion"
              description="A feature-rich event management and occasion planning platform. Designed and developed for ojasoccasion.com to help users plan and organize memorable events with ease and elegance."
              demoLink="https://www.ojasoccasion.com/"
              isOrganization={true}
              techStack={["React", "JavaScript", "CSS"]}
            />
          </Col>
        </Row>

        {/* Personal Projects Section */}
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
          <strong style={{ color: "#ff0080" }}>🚀</strong> Personal Projects
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cremeborne}
              isBlog={false}
              title="Creme Borne"
              description="A modern and elegant web application showcasing creative design and smooth user experience. Built with cutting-edge technologies to deliver a premium digital experience."
              demoLink="https://creme-borne.vercel.app/"
              techStack={["React", "Tailwind-Css", "Vercel"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Designyard}
              isBlog={false}
              title="The Design Yard"
              description="A thoughtfully designed interior design website that highlights bespoke spaces, creative layouts, and aesthetic excellence. Developed using modern UI/UX design patterns for a smooth and immersive experience."
              demoLink="https://thedesignyard.co.in/"
              techStack={["React", "CSS", "Javascript", "Vite"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aahar}
              isBlog={false}
              title="Aahar"
              description="A comprehensive food-related web application designed to provide users with an intuitive interface for exploring and discovering culinary delights. Features modern UI/UX design patterns."
              demoLink="https://aahar-seven.vercel.app/"
              techStack={["Html", "CSS", "Javascript", "Vite"]}
            />
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="project-cta">
          <p>Interested in collaborating?</p>
          <a
            href="https://wa.me/918726759825?text=Hi%20Sandeep!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Let's Build Something Amazing
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
