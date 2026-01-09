import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdWork, MdSchool } from "react-icons/md";
import { FaCode, FaRocket } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Frontend Developer",
    organization: "HyggeX World™",
    duration: "Mar 2025 - Dec 2025",
    description:
      "Building modern web applications with React.js, Tailwind-css and cutting-edge frontend technologies.",
    icon: <FaCode />,
  },
  {
    id: 2,
    type: "work",
    title: "Frontend Developer",
    organization: "WebSmith Software Solutions",
    duration: "Sept 2024 - Feb 2025",
    description:
      "Developed responsive websites and collaborated with cross-functional teams on multiple projects.",
    icon: <FaRocket />,
  },
  {
    id: 3,
    type: "work",
    title: "React.js Developer Intern",
    organization: "TechAhead",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Worked on developing and optimizing React.js components, implementing responsive UI designs, and fixing frontend bugs to improve user experience.",
    icon: <FaRocket />,
  },
  {
    id: 4,
    type: "work",
    title: "Web Developer Intern",
    organization: "Macverin Technologies",
    duration: "Jun 2023 - Aug 2023",
    description:
      "Assisted in building responsive web pages using HTML, CSS, and JavaScript, and collaborated with the team to implement design requirements and enhance website functionality.",
    icon: <FaRocket />,
  },
  {
    id: 5,
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "IPEC, Ghaziabad",
    duration: "2020 - 2024",
    description:
      "Graduated in 2024 with a Bachelor's degree, focusing on web technologies, and software development.",
    icon: <MdSchool />,
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
