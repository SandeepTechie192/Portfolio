import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder images - replace these with actual screenshots later
const placeholderImg1 = "https://placehold.co/600x400/0f0f1a/00d4ff?text=Creme+Borne&font=montserrat";
const placeholderImg2 = "https://placehold.co/600x400/0f0f1a/ff0080?text=Aahar&font=montserrat";
const placeholderImg3 = "https://placehold.co/600x400/1a1a2e/ffd700?text=AdaptMate&font=montserrat";
const placeholderImg4 = "https://placehold.co/600x400/1a1a2e/00d4ff?text=Ojas+Occasion&font=montserrat";

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
            <span className="stat-number">2</span>
            <span className="stat-label">Personal</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Professional</span>
          </div>
        </div>

        {/* Personal Projects Section */}
        <h2 className="project-sub-heading" style={{ 
          color: "#00d4ff", 
          fontSize: "1.8em", 
          marginTop: "40px", 
          marginBottom: "25px",
          textAlign: "left",
          borderLeft: "4px solid #ff0080",
          paddingLeft: "15px",
          textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
        }}>
          <strong style={{ color: "#ff0080" }}>🚀</strong> Personal Projects
        </h2>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg1}
              isBlog={false}
              title="Creme Borne"
              description="A modern and elegant web application showcasing creative design and smooth user experience. Built with cutting-edge technologies to deliver a premium digital experience."
              demoLink="https://creme-borne.vercel.app/"
              techStack={["React", "CSS3", "Vercel"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg2}
              isBlog={false}
              title="Aahar"
              description="A comprehensive food-related web application designed to provide users with an intuitive interface for exploring and discovering culinary delights. Features modern UI/UX design patterns."
              demoLink="https://aahar-seven.vercel.app/"
              techStack={["React", "Node.js", "MongoDB"]}
            />
          </Col>
        </Row>

        {/* Professional Projects Section */}
        <h2 className="project-sub-heading" style={{ 
          color: "#ffd700", 
          fontSize: "1.8em", 
          marginTop: "50px", 
          marginBottom: "25px",
          textAlign: "left",
          borderLeft: "4px solid #00d4ff",
          paddingLeft: "15px",
          textShadow: "0 0 10px rgba(255, 215, 0, 0.5)"
        }}>
          <strong style={{ color: "#00d4ff" }}>💼</strong> Professional Projects
        </h2>
        <p style={{ color: "#8b8b9a", marginBottom: "20px", fontStyle: "italic" }}>
          Projects developed during my professional experience at organizations
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg3}
              isBlog={false}
              title="AdaptMate"
              description="A professional enterprise solution built for adaptmate.in. This platform provides innovative solutions with a focus on user engagement and business efficiency. Developed as part of organizational requirements."
              demoLink="https://adaptmate.in/"
              isOrganization={true}
              techStack={["Next.js", "TypeScript", "AWS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg4}
              isBlog={false}
              title="Ojas Occasion"
              description="A feature-rich event management and occasion planning platform. Designed and developed for ojasoccasion.com to help users plan and organize memorable events with ease and elegance."
              demoLink="https://www.ojasoccasion.com/"
              isOrganization={true}
              techStack={["React", "Redux", "Firebase"]}
            />
          </Col>
        </Row>
        
        {/* Call to Action */}
        <div className="project-cta">
          <p>Interested in collaborating?</p>
          <a href="mailto:vermasandeep1290@gmail.com" className="cta-button">
            Let's Build Something Amazing
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
