import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view card-shine">
      <div className="project-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <div className="project-overlay">
          <a href={props.demoLink} target="_blank" rel="noreferrer" className="overlay-link">
            <FaExternalLinkAlt /> View Project
          </a>
        </div>
      </div>
      {props.isOrganization && (
        <div className="org-badge">
          <MdWork /> Organization
        </div>
      )}
      <Card.Body>
        <Card.Title className={props.isOrganization ? "project-title-org" : "project-title"}>
          {props.title}
        </Card.Title>
        
        {/* Tech Stack Badges */}
        {props.techStack && props.techStack.length > 0 && (
          <div className="tech-stack-badges">
            {props.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <div className="project-buttons">
          {/* GitHub Button - only show if ghLink exists */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="project-btn github-btn">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Demo Link Button */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className={`project-btn ${props.isOrganization ? "demo-btn-org" : "demo-btn"}`}
            >
              <CgWebsite /> &nbsp;
              {"Live Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
