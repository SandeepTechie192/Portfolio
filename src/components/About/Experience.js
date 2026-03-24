import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdWork, MdSchool } from "react-icons/md";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    type: "education",
    title: "Master of Business Administration (MBA)",
    organization: "[Your MBA College/University]",
    duration: "[Start Year] - [End Year]",
    description:
      "Specialized in [Finance/Marketing/HR/Operations] with focus on strategic management, business analytics, and leadership development.",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Commerce (B.Com)",
    organization: "[Your College/University]",
    duration: "[Start Year] - [End Year]",
    description:
      "Graduated with honors, specializing in Accounting, Economics, and Business Studies. Developed strong foundation in financial principles.",
    icon: <MdSchool />,
  },
  {
    id: 3,
    type: "work",
    title: "[Your Job Title]",
    organization: "[Company Name]",
    duration: "[Start Date] - Present",
    description:
      "[Describe your current role and responsibilities - e.g., Leading business development initiatives, financial analysis, market research, etc.]",
    icon: <FaBriefcase />,
  },
  {
    id: 4,
    type: "work",
    title: "[Previous Job Title]",
    organization: "[Previous Company Name]",
    duration: "[Start Date] - [End Date]",
    description:
      "[Describe your previous role - e.g., Managed client relationships, conducted market analysis, developed business strategies, etc.]",
    icon: <FaBriefcase />,
  },
  {
    id: 5,
    type: "work",
    title: "Business Analyst Intern",
    organization: "[Internship Company]",
    duration: "[Duration]",
    description:
      "Assisted in business process analysis, market research, and preparing strategic recommendations for senior management.",
    icon: <MdWork />,
  },
];

function Experience() {
  return (
    <div className="experience-section">
      <h1 className="project-heading" style={{ marginBottom: "50px" }}>
        My <strong className="purple">Journey</strong>
      </h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              {/* <div className="timeline-icon">{exp.icon}</div> */}
              <div className="timeline-badge">
                {exp.type === "work" ? <MdWork /> : <MdSchool />}
              </div>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-org">{exp.organization}</h4>
              <span className="timeline-duration">{exp.duration}</span>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </div>
  );
}

export default Experience;
